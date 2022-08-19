import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 900px;
  /* background-color: pink; */
`;

const Error404 = styled.div`
  font-size: 288px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  margin-top: 50px;
  font-size: 36px;
`;

const StyledLinkUnderlined = styled(Link)`
  color: #ff6060;
  text-decoration: underline;
  font-size: 18px;
  margin-top: 180px;
`;

function ErrorPage() {
  return (
    <>
      <ErrorContainer>
        <Error404>404</Error404>
        <ErrorMessage>
          Oups! La page que vous demandez n'existe pas.
        </ErrorMessage>
        <StyledLinkUnderlined to="/JeremiePiard_11_12082022/">
          Retourner sur la page d’accueil
        </StyledLinkUnderlined>
      </ErrorContainer>
      <Footer />
    </>
  );
}

export default ErrorPage;
