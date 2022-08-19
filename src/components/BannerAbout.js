import React from "react";
import styled from "styled-components";
import imgBannerAbout from "../assets/imgBannerAbout.png";

const BannerContainer = styled.div`
  height: 223px;
  /* border: 5px solid black; // * Visuel d'aide */
  border-radius: 25px;
  background-image: url(${imgBannerAbout});
  background-repeat: no-repeat;
  background-size: 1365px;
  background-position: 20% 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 100;
  margin-top: 40px;
  margin-bottom: 30px;
  color: white;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
`;

function Banner() {
  return <BannerContainer></BannerContainer>;
}

export default Banner;
