import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import styled from "styled-components";

const CarouselContainer = styled.div`
  background-color: lightgrey;
  height: 415px;
  margin: 15px auto 0 auto;
  position: relative;
  border-radius: 25px;
  width: 97%;
  @media screen and (max-width: 1300px) {
    width: 82vw;
    @media screen and (max-width: 800px) {
      border-radius: 12px;
      width: 90vw;
      height: 70vw;
    }
  }
`;

const CarouselGallery = styled.div`
  border-radius: 25px;

  @media screen and (max-width: 800px) {
    border-radius: 12px;
  }
`;

const ArrowLeft = styled.div`
  background: ${(props) => (props.showControls ? "block" : "none")};
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform-origin: top;
  rotate: -90deg;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0%;
  transform: translate(0, -41%);
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 30px;
  }
`;

const ArrowRight = styled.div`
  background: ${(props) => (props.showControls ? "block" : "none")};
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform-origin: top;
  rotate: 90deg;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 100%;
  transform: translate(0, 60%);
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 30px;
    transform: translate(0, 0);
  }
`;

const IndexOfPictures = styled.div`
  color: white;
  z-index: 1;
  font-size: 18px;
  font-weight: 200;
  top: 93.55%;
  left: 50.8%;
  transform: translate(-100%, -100%);
  position: absolute;
`;

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const showControls = pictures.length > 1;

  const carouselControls = {
    backgroundImage: `url(${pictures[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  const previousPicture = () => {
    if (index === 0) setIndex(pictures.length - 1);
    else setIndex(index - 1);
  };

  const nextPicture = () => {
    if (index === pictures.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <CarouselContainer>
      <ArrowLeft
        onClick={previousPicture}
        style={showControls ? { display: "block" } : { display: "none" }}
      ></ArrowLeft>
      <CarouselGallery style={carouselControls}></CarouselGallery>
      <ArrowRight
        onClick={nextPicture}
        style={showControls ? { display: "block" } : { display: "none" }}
      ></ArrowRight>
      <IndexOfPictures>
        {index + 1}/{pictures.length}
      </IndexOfPictures>
    </CarouselContainer>
  );
}

export default Carousel;
