import React from 'react'
import Header from '../components/header'

const Exclusives = () =>{
  const text = {
    titleStrong: "Empresa XPTO - ",
    title: "Conheça nossos produtos exclusivos",
    info: "Listagem de produtos exclusivos - clique no produto desejado para saber mais"
  }

  return (
    <>
       <Header text={text} />
    </>
  );
}

export default Exclusives;
