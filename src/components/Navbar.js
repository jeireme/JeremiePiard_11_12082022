import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/JeremiePiard_11_12082022/" className="navbar-logo">
            <img src={logo} alt="Logo Kasa" />
          </Link>
        </div>
        <div className="navbar-container">
          <Link to="/JeremiePiard_11_12082022/"> Accueil </Link>
          <Link to="/JeremiePiard_11_12082022/about"> À propos </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
