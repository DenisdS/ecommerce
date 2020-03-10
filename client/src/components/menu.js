import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #fff;
`
const links = [
  { route: "/todos", label: "Todos"},
  { route: "/exclusivos", label: "Exclusivos"},
  { route: "/promocoes", label: "Promoção"},
  { route: "/favoritos", label: "Favoritos"}
];

const Menu = () => {
  return(
    <Nav>
      <ul>
      { links.map(link => (
          <li key={link.route}>

            <Link to={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default Menu;
