import React from "react";
import styled from "styled-components";
import redStar from "../assets/redStar.svg";
import greyStar from "../assets/greyStar.svg";

const StarsContainer = styled.div`
  display: flex;
`;

const RedStar = styled.div`
  background-image: url(${redStar});
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
  }
`;

const GreyStars = styled.div`
  background-image: url(${greyStar});
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
  }
`;

function Rating({ number }) {
  const nbOfRedStar = number;
  const nbOfGreyStar = 5 - nbOfRedStar;

  return (
    <StarsContainer>
      {Array.from({ length: nbOfRedStar }).map(() => (
        <RedStar></RedStar>
      ))}
      {Array.from({ length: nbOfGreyStar }).map(() => (
        <GreyStars></GreyStars>
      ))}
    </StarsContainer>
  );
}

export default Rating;
