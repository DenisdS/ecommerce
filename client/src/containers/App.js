import React from 'react'
import { createGlobalStyle }  from 'styled-components'
import { normalize } from 'styled-normalize'

import Menu from '../components/menu'
import Routes from '../routes/routes'
import Header from '../components/header'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <Routes />
    </>
  )
}

export default App;
