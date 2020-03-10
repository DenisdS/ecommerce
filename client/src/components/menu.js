import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bgSite from '../assets/sprite.png'

const Nav = styled.nav`
  background: #fff;
`
const Ul = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const Li = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 80px;
  padding-bottom: 8px;
  background: url(${bgSite}) no-repeat;
  background-position: 23px 14px;
  border-bottom: 1px #e6e6e6 solid;
  :nth-child(1) a{
    padding: 61px 50px 0 0px;
  }
  :nth-child(2){
    background-position: 23px -84px;
  }
  :nth-child(3){
    background-position: 23px -170px;
  }
  :nth-child(4){
    background-position: 21px -243px;
  }
  :nth-child(5){
    background-position: 19px -320px;
    border: none;
  }
`
const LinkMenu = styled(Link)`
  padding: 47px 5px 0px 5px;
  color: #7d7d7d;
`
const links = [
  { route: "/", label: ""},
  { route: "/todos", label: "Todos"},
  { route: "/exclusivos", label: "Exclusivos"},
  { route: "/promocoes", label: "Promoção"},
  { route: "/favoritos", label: "Favoritos"}
];

const Menu = () => {
  return(
    <Nav>
      <Ul>
      { links.map(link => (
          <Li key={link.route}>

            <LinkMenu to={link.route}>
              {link.label}
            </LinkMenu>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default Menu;
