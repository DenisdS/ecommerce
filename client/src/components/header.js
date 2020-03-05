import React from 'react'
import styled from 'styled-components'

const HeaderS = styled.header`
  display: grid;
`
const Header = (props) => {
  return(
    <HeaderS>
      <h1>
        <em>{props.text.titleStrong}</em>
        {props.text.title}
      </h1>

      <p>{props.text.info}</p>
    </HeaderS>
  )
}

export default Header;
