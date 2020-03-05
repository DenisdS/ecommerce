import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
            <Router>
            <Link to={link.route}>
              {link.label}
            </Link>
            </Router>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;
