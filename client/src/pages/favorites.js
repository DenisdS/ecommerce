import React from 'react'
import Header from '../components/header'

const Favorites = () =>{
  const text = {
    titleStrong: "Empresa XPTO - ",
    title: "Meus Favoritos",
    info: "Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
  }

  return (
    <>
      <Header text={text} />
    </>
  );
}

export default Favorites;
