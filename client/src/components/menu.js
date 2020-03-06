import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { route: "/todos", label: "Todos"},
  { route: "/exclusivos", label: "Exclusivos"},
  { route: "/promocoes", label: "Promoção"},
  { route: "/favoritos", label: "Favoritos"}
];

const Menu = () => {
  return(
    <nav>
      <ul>
      { links.map(link => (
          <li key={link.route}>

            <Link to={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;
