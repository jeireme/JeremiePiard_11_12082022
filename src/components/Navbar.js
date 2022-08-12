import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo Kasa" />
          </Link>
        </div>
        <div className="navbar-container">
          <Link to="/"> Accueil </Link>
          <Link to="/about"> À propos </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
