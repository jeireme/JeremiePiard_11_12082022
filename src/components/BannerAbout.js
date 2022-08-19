import React from "react";
import styled from "styled-components";
import imgBannerAbout from "../assets/imgBannerAbout.png";

const BannerContainer = styled.div`
  height: 223px;
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
  margin: 40px auto 30px auto;
  width: 98%;
  color: white;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1300px) {
    width: 83vw;
    @media screen and (max-width: 800px) {
      margin-top: 15px;
      border-radius: 10px;
      width: 90vw;
      height: 300px;
      @media screen and (max-width: 600px) {
        background-size: 600px;
        background-position: 60% 40%;
      }
    }
  }
`;

function Banner() {
  return <BannerContainer></BannerContainer>;
}

export default Banner;
