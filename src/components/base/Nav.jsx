import React from "react";
import {Link} from 'react-router-dom';
import routes from "../../routes";
import '../../base.css';

function Nav(props){
  return (
  <nav className="navbar navbar-expand-sm">
    <div className="row">
    <Link to="/" className="fs-3 navbar-brand col">THE STUDIO GHIBLI COLLECTION</Link>
      <ul className="navbar-nav col">
        {
          routes.filter(route => route.isNav == true).map((route, index) => 
            <li key={index}>
              <Link to={route.path} className="nav-item nav-link ">{route.title}</Link>
            </li>
          )
        }
      </ul>
    </div>
  </nav>
    )
}

export default Nav;