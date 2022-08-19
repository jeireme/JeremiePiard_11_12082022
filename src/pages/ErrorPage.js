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
  @media screen and (max-width: 1300px) {
    height: 700px;
  }
`;

const Error404 = styled.div`
  font-size: 288px;
  font-weight: bold;
  @media screen and (max-width: 1300px) {
    font-size: 200px;
    @media screen and (max-width: 800px) {
      font-size: 100px;
    }
  }
`;

const ErrorMessage = styled.div`
  margin: 50px auto 0 auto;
  font-size: 36px;
  width: fit-content;
  @media screen and (max-width: 1300px) {
    margin-top: 20px;
    font-size: 25px;
    @media screen and (max-width: 800px) {
      width: 250px;
      font-size: 20px;
      padding-left: 20px;
    }
  }
`;

const StyledLinkUnderlined = styled(Link)`
  color: #ff6060;
  text-decoration: underline;
  font-size: 18px;
  margin-top: 180px;
  @media screen and (max-width: 1300px) {
    margin-top: 120px;
  }
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
