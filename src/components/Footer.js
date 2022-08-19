import React from "react";
import styled from "styled-components";
import logoWhite from "../assets/logo-white.svg";

const FooterContainer = styled.div`
  background-color: black;
  margin-top: 50px;
  /* width: 100%; */
  height: 180px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <img src={logoWhite} alt="Logo Kasa" style={{ width: "120px", margin: "35px" }} />
      <div>© 2020 Kasa. All rights reserved</div>
    </FooterContainer>
  );
}

export default Footer;
