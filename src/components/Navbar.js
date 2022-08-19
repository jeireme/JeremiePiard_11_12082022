import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 300;
  margin: auto;
  padding: 0 20px;
  @media screen and (max-width: 1300px) {
    width: 82vw;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 800px) {
    width: 140px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin-top: -10px;
  @media screen and (max-width: 800px) {
    margin-top: 0px;
    width: 150px;
    font-size: 14px;
    padding-right: 7px;
    text-transform: uppercase;
  }
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
        <NavLink to="/JeremiePiard_11_12082022/">
          <Logo src={logo} alt="Logo Kasa" />
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
