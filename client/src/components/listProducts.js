import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-auto-rows: 220px;
  gap: 37.5px;
  padding: 0;
`
const Li = styled.li`
  background: red;
`

const ListProducts = () => {
  return(
    <Section>
      <Ul>
        <Li />
        <Li />
        <Li />
        <Li />
        <Li />
        <Li />
        <Li />
        <Li />
      </Ul>
    </Section>
  )
}

export default ListProducts;
