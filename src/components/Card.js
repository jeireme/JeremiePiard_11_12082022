import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  margin-top: -20px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardTitle = styled.div`
  position: relative;
  color: #fff;
  margin: 20px;
  top: 82%;
  line-height: 22px;
  font-weight: 500;
  height: 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1300px) {
    font-size: 1.1em;
    @media screen and (max-width: 600px) {
      top: 80%;
      @media screen and (max-width: 450px) {
        top: 70%;
      }
    }
  }
`;

function Card(props) {
  return (
    <ImageContainer
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.cover})`,
      }}
    >
      <CardTitle>{props.title}</CardTitle>
    </ImageContainer>
  );
}

export default Card;
