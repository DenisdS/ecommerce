import React from 'react'
import Header from '../components/header'

const Promotions = () =>{
  const text = {
    titleStrong: "Empresa XPTO - ",
    title: "Conheça nossas promoções",
    info: "Listagem de produtos em promoção - clique no produto desejado para saber mais"
  }

  return (
    <>
      <Header text={text} />
    </>
  );
}

export default Promotions;
