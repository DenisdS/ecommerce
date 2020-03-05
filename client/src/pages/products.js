import React from 'react'
import Header from '../components/header'

const Products = (props) =>{
  const text = {
    titleStrong: "Empresa XPTO - ",
    title: "Conheça todos os nossos produtos",
    info: "Listagem de produtos - clique no produto desejado para saber mais"
  }

  return (
    <>
      <Header text={text} />
    </>
  );
}

export default Products;
