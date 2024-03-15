import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  // Ce composant renvoie un header avec un logo et des liens de navigation
  return (
    <header>
      <nav>  

        <NavLink to="/">
          <img className="header-logo" src={Logo} alt="Logo Kasa" />
        </NavLink>

        <div className="header-links">

          <p>
            <NavLink to="/">Accueil</NavLink>
          </p>

          <p>
            <NavLink to="/about">À propos</NavLink>
          </p>

        </div>

      </nav>
    </header>
  );
};

export default Header;
