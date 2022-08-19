import React from "react";
import styled from "styled-components";
import imgBanner from "../assets/imgBanner.png";

const BannerContainer = styled.div`
  height: 223px;
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
  margin: 50px auto 0 auto;
  color: white;
  width: 98%;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1300px) {
    width: 83vw;
    font-size: 35px;
    @media screen and (max-width: 800px) {
      margin-top: 15px;
      border-radius: 10px;
      width: 90vw;
      height: 120px;
      font-size: 26px;
    }
  }
`;

function Banner() {
  const mobileSize = window.innerWidth >= 400;

  return (
    <BannerContainer>
      {mobileSize
        ? (<p> Chez vous, partout et ailleurs</p>)
        : (<p style={{ textAlign: "left", width: "100%", paddingLeft: "20px" }}> Chez vous, <br /> partout et ailleurs</p>)
      }
    </BannerContainer>
  );
}

export default Banner;
