import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-auto-rows: 220px;
  gap: 37.5px;
  padding: 0;
`
const ItemList = styled.li`
  background: red;
`

const ListProducts = () => {
  return(
    <Section>
      <List>
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </List>
    </Section>
  )
}

export default ListProducts;
