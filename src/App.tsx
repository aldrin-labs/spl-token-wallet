import React, { lazy, Suspense, useMemo } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Container, Wrapper } from './components/CommonStyledComponents'

const Welcome = lazy(() => import('./routes/Welcome'))

// const LOCAL_BUILD = window.location.href.includes('localhost');

const a = 1

a.toNum()
export const Pages = () => {
  useMemo(() => {
    const params = new URLSearchParams(window.location.hash.slice(1))
    const origin = params.get('origin')
    const { hash } = window.location

    if (origin) {
      sessionStorage.setItem('origin', origin)
    } else {
      sessionStorage.removeItem('origin')
    }

    if (hash) {
      sessionStorage.setItem('hash', hash)
    } else {
      sessionStorage.removeItem('hash')
    }
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      {/* popup if connecting from dex UI */}
      {/* {window.opener && !!wallet && <Redirect from="/" to="/connect_popup" />} */}

      {/* if wallet exists - for case when we'll have unlocked wallet */}
      {/* {!!wallet && <Redirect from="/" to="/wallet" />} */}

      {/* if have mnemonic in localstorage - login, otherwise - restore/import/create */}
    </Routes>
  )
}


export const App = () => {
  // Disallow rendering inside an iframe to prevent clickjacking.
  if (window.self !== window.top) {
    return null
  }
  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Pages />
          </Suspense>
        </Wrapper>
      </Container>
    </BrowserRouter>
  )
}
