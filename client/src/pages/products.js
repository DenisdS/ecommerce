import React from 'react'
import Helmet from 'react-helmet'

import List from '../components/ListProducts'

const Products = () =>{

  return (
    <>
      <Helmet title="Empresa XPTO - Conheça nossos produtos" />
      <List />
    </>
  );
}

export default Products;
