import React from "react";
import styled from "styled-components";
import imgBanner from "../assets/imgBanner.png";

const BannerContainer = styled.div`
  height: 223px;
  /* border: 5px solid black; // * Visuel d'aide */
  border-radius: 25px;
  background-image: url(${imgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 43%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 100;
  margin-top: 40px;
  color: white;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
`;

function Banner() {
  return (
    <BannerContainer>
      <p>Chez vous, partout et ailleurs</p>
    </BannerContainer>
  );
}

export default Banner;
