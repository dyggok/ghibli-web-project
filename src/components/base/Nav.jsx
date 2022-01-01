import React from "react";
import {Link} from 'react-router-dom';
import routes from "../../routes";
import '../../base.css';

function Nav(props){
  return (
  <nav className="navbar navbar-expand-md">
    <Link to="/" className="fs-3 navbar-brand">THE STUDIO GHIBLI COLLECTION</Link>
      <ul className="navbar-nav">
        {
          routes.filter(route => route.isNav == true).map((route, index) => 
            <li key={index}>
              <Link to={route.path} className="nav-item nav-link">{route.title}</Link>
            </li>
          )
        }
      </ul>
  </nav>
    )
}

export default Nav;