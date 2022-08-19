import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import styled from "styled-components";

const CarouselContainer = styled.div`
  background-color: lightgrey;
  height: 415px;
  margin-top: 15px;
  position: relative;
  border-radius: 12px;
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
  transform: translate(14%, -41%);
  cursor: pointer;
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
  transform: translate(-25%, 60%);
  cursor: pointer;
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
  // const pictures = datas.pictures;

  const [index, setIndex] = useState(0);

  const showControls = pictures.length > 1;

  const carouselControls = {
    backgroundImage: `url(${pictures[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "25px",
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
      <div style={carouselControls}></div>
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
