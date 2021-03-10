import React, { useState } from 'react';
import styled from 'styled-components';
import {
  RowContainer,
  Input,
  TextButton,
  SearchInput,
} from '../../pages/commonStyles';
import Eye from '../../images/Eye.svg';
import ClosedEye from '../../images/ClosedEye.svg';
import Loupe from '../../images/Loupe.svg';
import { useTheme } from '@material-ui/core';

const InputWithComponent = ({
  type,
  value,
  onChange,
  placeholder,
  ComponentToShow,
}: {
  type: string;
  value: string;
  onChange: any;
  placeholder: string;
  ComponentToShow: any;
}) => {
  return (
    <RowContainer style={{ position: 'relative', width: '90%' }}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-40%)',
        }}
      >
        {ComponentToShow}
      </div>
    </RowContainer>
  );
};

const SearchInputWithLoupe = ({
  type,
  value,
  onChange,
  placeholder,
  ComponentToShow,
}: {
  type: string;
  value: string;
  onChange: any;
  placeholder: string;
  ComponentToShow: any;
}) => {
  return (
    <RowContainer style={{ position: 'relative', width: '100%' }}>
      <SearchInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-40%)',
        }}
      >
        {ComponentToShow}
      </div>
    </RowContainer>
  );
};

const InputWithEye = ({
  showPassword,
  onEyeClick,
  ...props
}: {
  type: string;
  value: string;
  onChange: any;
  placeholder: string;
  showPassword: boolean;
  onEyeClick: () => void;
}) => {
  return (
    <InputWithComponent
      ComponentToShow={
        <img
          style={{ padding: '.5rem', cursor: 'pointer' }}
          onClick={onEyeClick}
          src={showPassword ? ClosedEye : Eye}
        />
      }
      {...props}
    />
  );
};

const InputWithPaste = ({
  onPasteClick,
  ...props
}: {
  type: string;
  value: string;
  onChange: any;
  placeholder: string;
  onPasteClick: () => void;
}) => {
  const theme = useTheme();

  return (
    <InputWithComponent
      ComponentToShow={
        <TextButton color={theme.customPalette.blue.new} onClick={onPasteClick}>
          Paste
        </TextButton>
      }
      {...props}
    />
  );
};

const InputWithSearch = ({
  onSearchClick,
  ...props
}: {
  type: string;
  value: string;
  onChange: any;
  placeholder: string;
  onSearchClick: () => void;
}) => {
  const theme = useTheme();

  return (
    <SearchInputWithLoupe
      ComponentToShow={
        <img
          style={{ padding: '.5rem', cursor: 'pointer' }}
          onClick={onSearchClick}
          src={Loupe}
        />
      }
      {...props}
    />
  );
};

export { InputWithEye, InputWithPaste, SearchInputWithLoupe, InputWithSearch };
export default InputWithComponent;
