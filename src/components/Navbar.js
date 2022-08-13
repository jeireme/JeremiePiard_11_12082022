import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Nav = styled.nav`
  /* border: 7px solid #1c6ea4; // * Visuel d'aide */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  /* border: 10px solid pink; // * Visuel d'aide */
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  /* border: 10px solid pink; // * Visuel d'aide */
`;

const StyledLinkUnderlined = styled(Link)`
  color: #ff6060;
  text-decoration: underline;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  text-decoration: none;
  font-size: 18px;
`;

function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <StyledLink to="/JeremiePiard_11_12082022/" className="navbar-logo">
          <img src={logo} alt="Logo Kasa" />
        </StyledLink>
      </LogoContainer>
      <LinkContainer>
        <StyledLinkUnderlined to="/JeremiePiard_11_12082022/">
          {" "}
          Accueil{" "}
        </StyledLinkUnderlined>
        <StyledLink to="/JeremiePiard_11_12082022/about"> À Propos </StyledLink>
      </LinkContainer>
    </Nav>
  );
}

export default Navbar;
