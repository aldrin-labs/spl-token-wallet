import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  refreshWalletPublicKeys,
  useBalanceInfo,
  useWallet,
  useWalletTokenAccounts,
} from '../../../utils/wallet';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { TOKENS, useUpdateTokenName } from '../../../utils/tokens/names';
import { useAsyncData } from '../../../utils/fetch-loop';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { useTheme } from '@material-ui/core';
import { useSendTransaction } from '../../../utils/notifications';
import {
  abbreviateAddress,
  formatNumberToUSFormat,
  stripDigitPlaces,
} from '../../../utils/utils';
import { useConnectionConfig } from '../../../utils/connection';
import Link from '@material-ui/core/Link';
import DialogForm from '../../../pages/Wallet/components/DialogForm';
import { showSwapAddress } from '../../../utils/config';
import { swapApiRequest } from '../../../utils/swap/api';
import TokenIcon from '../../../components/TokenIcon';
import { InputWithPaste, InputWithSearch } from '../../../components/Input';
import {
  Row,
  Input,
  ListCard,
  RowContainer,
  StyledCheckbox,
  Title,
  VioletButton,
  WhiteButton,
} from '../../commonStyles';
import { StyledTab, StyledTabs } from '../styles';

const WhiteText = styled(Title)`
  font-size: 1.4rem;
  font-family: Avenir Next Demi;
`;

const GreenText = styled(WhiteText)`
  color: ${(props) => props.theme.customPalette.green.light};
`;

export const feeFormat = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 6,
  maximumFractionDigits: 6,
});

export default function AddTokenDialog({ open, onClose }) {
  let wallet = useWallet();
  let [tokenAccountCost] = useAsyncData(
    wallet.tokenAccountCost,
    wallet.tokenAccountCost,
  );
  let updateTokenName = useUpdateTokenName();
  const [walletAccounts] = useWalletTokenAccounts();

  const [sendTransaction, sending] = useSendTransaction();
  const { endpoint } = useConnectionConfig();
  const popularTokens = TOKENS[endpoint];

  const [tab, setTab] = useState(!!popularTokens ? 'popular' : 'manual');
  const [searchValue, setSearchValue] = useState('');
  const [mintAddress, setMintAddress] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [erc20Address, setErc20Address] = useState('');
  const [selectedTokens, setSelectedTokens] = useState([]);

  const theme = useTheme();
  const balanceInfo = useBalanceInfo(wallet.publicKey);
  let { amount, decimals } = balanceInfo || {
    amount: 0,
    decimals: 8,
    mint: null,
    tokenName: 'Loading...',
    tokenSymbol: '--',
  };

  useEffect(() => {
    if (!popularTokens) {
      setTab('manual');
    }
  }, [popularTokens]);

  function onSubmit(params) {
    if (tab === 'manual') {
      params = { mintAddress, tokenName, tokenSymbol };
    } else if (tab === 'erc20') {
      params = { erc20Address };
    } else {
      Promise.all(
        selectedTokens.map((tokenInfo) => sendTransaction(addToken(tokenInfo))),
      ).then(() => {
        refreshWalletPublicKeys(wallet);
        onClose();
      });

      return;
    }

    sendTransaction(addToken(params), {
      onSuccess: () => {
        refreshWalletPublicKeys(wallet);
        onClose();
      },
    });
  }

  async function addToken({
    mintAddress,
    tokenName,
    tokenSymbol,
    erc20Address,
  }) {
    if (erc20Address) {
      let tokenInfo = await swapApiRequest('POST', `coins/eth/${erc20Address}`);
      mintAddress = tokenInfo.splMint;
      tokenName = tokenInfo.name;
      tokenSymbol = tokenInfo.ticker;
      if (tokenInfo.blockchain !== 'sol') {
        tokenName = 'Wrapped ' + tokenName;
      }
    }

    let mint = new PublicKey(mintAddress);
    updateTokenName(mint, tokenName, tokenSymbol);
    const resp = await wallet.createAssociatedTokenAccount(mint);
    return resp[1];
  }

  let valid = true;
  if (tab === 'erc20') {
    valid = erc20Address.length === 42 && erc20Address.startsWith('0x');
  } else if (tab === 'manual') {
    valid = mintAddress !== '' && tokenSymbol !== '' && tokenName !== '';
  } else {
    valid = selectedTokens.length > 0;
  }

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      height={'auto'}
      padding={'2rem 0'}
    >
      {!!popularTokens && (
        <RowContainer margin="0 0 2rem 0">
          <StyledTabs
            value={tab}
            theme={theme}
            onChange={(e, value) => setTab(value)}
          >
            <StyledTab theme={theme} label="Popular Tokens" value="popular" />
            {showSwapAddress ? (
              <StyledTab theme={theme} label="ERC20 Token" value="erc20" />
            ) : null}
            <StyledTab theme={theme} label="Manual Input" value="manual" />
          </StyledTabs>
        </RowContainer>
      )}
      <RowContainer direction="column">
        <RowContainer margin="0 0 2rem 0">
          {tokenAccountCost ? (
            <WhiteText theme={theme}>
              Add a token to your wallet. This will cost{' '}
              <GreenText theme={theme}>
                {stripDigitPlaces(tokenAccountCost / LAMPORTS_PER_SOL, 6)} SOL
              </GreenText>{' '}
              per token.
            </WhiteText>
          ) : (
            <LoadingIndicator />
          )}
        </RowContainer>

        {tab === 'manual' || !popularTokens ? (
          <>
            <InputWithPaste
              placeholder={'Token Mint Address'}
              value={mintAddress}
              onChange={(e) => setMintAddress(e.target.value)}
              autoFocus
              disabled={sending}
              onPasteClick={() =>
                navigator.clipboard
                  .readText()
                  .then((clipText) => setMintAddress(clipText))
              }
            />
            <RowContainer width="90%" margin={'2rem 0 0 0'}>
              <Input
                placeholder={'Token Name (e.g. Cryptocurrencies.Ai Token)'}
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                disabled={sending}
              />
            </RowContainer>
            <RowContainer width="90%" margin={'2rem 0 0 0'}>
              <Input
                placeholder={'Token Symbol (e.g. CCAI)'}
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                disabled={sending}
              />
            </RowContainer>
          </>
        ) : tab === 'popular' ? (
          <RowContainer width="90%">
            <RowContainer justify="flex-start" direction="column">
              <WhiteText theme={theme}>
                Select tokens you want to add to your wallet
              </WhiteText>
              <RowContainer margin="2rem 0">
                <InputWithSearch
                  type={'text'}
                  value={searchValue}
                  onChange={(e) => {
                    if (
                      !`${e.target.value}`.match(/[a-zA-Z1-9]/) &&
                      e.target.value !== ''
                    ) {
                      return;
                    }

                    setSearchValue(e.target.value);
                  }}
                  onSearchClick={() => {}}
                  placeholder={'Search'}
                />
              </RowContainer>
              <ListCard>
                {popularTokens
                  .filter(
                    (token) =>
                      !token.deprecated &&
                      (searchValue !== ''
                        ? (
                            token.tokenName ??
                            abbreviateAddress(token.mintAddress)
                          )
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                          token.tokenSymbol
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        : true),
                  )

                  .map((token) => (
                    <TokenListItem
                      key={token.mintAddress}
                      {...token}
                      existingAccount={(walletAccounts || []).find(
                        (account) =>
                          account.parsed.mint.toBase58() === token.mintAddress,
                      )}
                      onSubmit={onSubmit}
                      disalbed={sending}
                      selectedTokens={selectedTokens}
                      setSelectedTokens={setSelectedTokens}
                    />
                  ))}
              </ListCard>
            </RowContainer>
          </RowContainer>
        ) : tab === 'erc20' ? (
          <>
            <InputWithPaste
              placeholder={'ERC20 Contract Address'}
              value={erc20Address}
              onChange={(e) => setErc20Address(e.target.value.trim())}
              autoFocus
              disabled={sending}
              onPasteClick={() =>
                navigator.clipboard
                  .readText()
                  .then((clipText) => setMintAddress(clipText))
              }
            />
            {erc20Address && valid ? (
              <Link
                href={`https://etherscan.io/token/${erc20Address}`}
                target="_blank"
                rel="noopener"
              >
                View on Etherscan
              </Link>
            ) : null}
          </>
        ) : null}
        <RowContainer width="90%" justify="space-between" margin="2rem 0 0 0">
          <WhiteText theme={theme}>
            Your SOL Balance:{' '}
            <GreenText theme={theme}>
              {formatNumberToUSFormat(
                stripDigitPlaces(amount / Math.pow(10, decimals), decimals),
              )}{' '}
              SOL
            </GreenText>
          </WhiteText>
          <WhiteText theme={theme}>
            Cost:{' '}
            <GreenText theme={theme}>
              {tab === 'popular'
                ? (+feeFormat.format(tokenAccountCost / LAMPORTS_PER_SOL) ||
                    0.002039) * selectedTokens.length
                : +feeFormat.format(tokenAccountCost / LAMPORTS_PER_SOL) ||
                  0.002039}{' '}
              SOL
            </GreenText>
          </WhiteText>
        </RowContainer>
        <RowContainer width="90%" justify="space-between" margin="2rem 0 0 0">
          <WhiteButton
            width="calc(50% - .5rem)"
            theme={theme}
            onClick={onClose}
          >
            Cancel
          </WhiteButton>
          <VioletButton
            theme={theme}
            width="calc(50% - .5rem)"
            disabled={sending || !valid}
            onClick={() => onSubmit({ tokenName, tokenSymbol, mintAddress })}
          >
            Add
          </VioletButton>
        </RowContainer>
      </RowContainer>
    </DialogForm>
  );
}

export function TokenListItem({
  tokenName,
  icon,
  tokenSymbol,
  mintAddress,
  disabled,
  existingAccount,
  selectedTokens,
  setSelectedTokens,
}) {
  const alreadyExists = !!existingAccount;

  const theme = useTheme();
  const selectedTokenIndex = selectedTokens.findIndex(
    (token) => token.mintAddress === mintAddress,
  );
  const checked = selectedTokenIndex !== -1;
  const isDisabled = disabled || alreadyExists;

  return (
    <>
      <RowContainer
        key={tokenName}
        justify="space-between"
        style={{
          borderBottom: theme.customPalette.border.new,
          cursor: 'pointer',
        }}
        onClick={() => {
          if (isDisabled) return;

          if (checked) {
            setSelectedTokens([
              ...selectedTokens.slice(0, selectedTokenIndex),
              ...selectedTokens.slice(selectedTokenIndex + 1),
            ]);
          } else {
            setSelectedTokens([
              ...selectedTokens,
              { tokenName, tokenSymbol, mintAddress },
            ]);
          }
        }}
      >
        <Row>
          <TokenIcon url={icon} tokenName={tokenName} size={'2rem'} />
          <WhiteText theme={theme} style={{ marginLeft: '1rem' }}>
            {tokenName ?? abbreviateAddress(mintAddress)}
            {tokenSymbol ? ` (${tokenSymbol})` : null}
          </WhiteText>
        </Row>
        <StyledCheckbox
          theme={theme}
          checked={checked || isDisabled}
          disabled={isDisabled}
        />
      </RowContainer>
    </>
  );
}