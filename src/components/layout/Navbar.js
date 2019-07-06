import React from "react";
import {Link} from "react-router-dom"
const Navbar = ({icon, title}) => {
  return (
    <div>
      <nav
        className="navbar has-background-primary	"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item " href="https://bulma.io">
            <h4 className="title is-4 has-text-white">
              <i className={icon}/> {title}
            </h4>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
  
}
Navbar.defaultProps = {
  title: 'Title',
  icon: 'fab fa-github'
} 

export default Navbar;
