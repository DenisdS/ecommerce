import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router'

const HeaderS = styled.header`
  display: grid;
  background: red;
`
const Header = (props) => {
  let pageLocation = props.location.pathname;
  let showText = "";

  const text = {
    products: {
      titleStrong: "Empresa XPTO - ",
      title: "Conheça todos os nossos produtos",
      info: "Listagem de produtos - clique no produto desejado para saber mais"
    },
    promotions: {
      titleStrong: "Empresa XPTO - ",
      title: "Conheça nossas promoções",
      info: "Listagem de produtos em promoção - clique no produto desejado para saber mais"
    },
    favorites: {
      titleStrong: "Empresa XPTO - ",
      title: "Meus Favoritos",
      info: "Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
    },
    exclusives: {
      titleStrong: "Empresa XPTO - ",
      title: "Conheça nossos produtos exclusivos",
      info: "Listagem de produtos exclusivos - clique no produto desejado para saber mais"
    }
  }

  switch (pageLocation) {
    case '/':
      showText = text.products;
      break;
    case '/todos':
      showText = text.products;
      break;
    case '/promocoes':
      showText = text.promotions;
      break;
    case '/favoritos':
      showText = text.favorites;
      break;
    case '/exclusivos':
      showText = text.exclusives;
      break;
    default:
      showText = "";
  }

  return(
    <HeaderS>
      <h1>
        <em>{showText.titleStrong}</em>
        {showText.title}
      </h1>

      <p>{showText.info}</p>
    </HeaderS>
  )
}

export default withRouter(Header);
