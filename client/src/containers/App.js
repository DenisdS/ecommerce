import React from 'react'
import { createGlobalStyle }  from 'styled-components'
import { normalize } from 'styled-normalize'

import Menu from '../components/menu'
import Routes from '../routes/routes'
import Header from '../components/header'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    background: #f1f3f3;
  }
  *{
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  #root{
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-gap: 100px;
  }
  main{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
  }
`

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Menu />
      <main>
        <Header />
        <Routes />
      </main>
    </>
  )
}

export default App;
