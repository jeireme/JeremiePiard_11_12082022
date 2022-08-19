import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Nav = styled.nav`
  /* border: 7px solid #1c6ea4; // * Visuel d'aide */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 300;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin-top: -10px;
  /* border: 10px solid pink; // * Visuel d'aide */
`;

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: "#ff6060",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <Nav>
      <div>
        <NavLink to="/JeremiePiard_11_12082022/" className="navbar-logo">
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <LinkContainer>
        <NavLink style={navLinkStyle} to="/JeremiePiard_11_12082022/">
          Accueil
        </NavLink>
        <NavLink style={navLinkStyle} to="/JeremiePiard_11_12082022/about">
          À Propos
        </NavLink>
      </LinkContainer>
    </Nav>
  );
}

export default Navbar;
