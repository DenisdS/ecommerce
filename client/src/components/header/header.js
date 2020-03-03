import React from 'react'
import styled from 'styled-components'

const HeaderS = styled.header`
  display: grid;
`
const Header = () => {
  return(
    <HeaderS>
      <h1>
        <em>Empresa XPTO</em> - Conheça todos os nossos produtos
      </h1>

      <p>Listagem de produtos - clique no produto desejado para saber mais</p>
    </HeaderS>
  )
}

export default Header;
