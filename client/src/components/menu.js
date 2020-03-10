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
  background: url(${bgSite}) no-repeat;
  background-position: 23px 14px;
  border-bottom: 1px red solid;
  :nth-child(2){
    background-position: 23px -84px;
  }
  :nth-child(3){
    background-position: 23px -170px;
  }
  :nth-child(4){
    background-position: 21px -248px;
  }
  :nth-child(5){
    background-position: 19px -320px;
    border: none;
  }
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

            <Link to={link.route}>
              {link.label}
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default Menu;
