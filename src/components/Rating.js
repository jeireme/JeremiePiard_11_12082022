import React from "react";
import styled from "styled-components";
import redStar from "../assets/redStar.svg";
import greyStar from "../assets/greyStar.svg";

const StarsContainer = styled.div`
  display: flex;
`;

const RedStar = styled.div`
  background-image: url(${redStar});
  width: 36px;
  height: 36px;
`;

const GreyStars = styled.div`
  background-image: url(${greyStar});
  width: 36px;
  height: 36px;
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
