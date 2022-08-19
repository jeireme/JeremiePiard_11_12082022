import React from "react";
import styled from "styled-components";
import redStar from "../assets/redStar.svg";
import greyStar from "../assets/greyStar.svg";

const StarsContainer = styled.div`
display: flex`;

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
  console.clear();

  const nbOfRedStar = number;
  //   console.log("REDSTAR : " + nbOfRedStar);

  const nbOfGreyStar = 5 - nbOfRedStar;
  //   console.log("GREYSTAR : " + nbOfGreyStar);

  console.log("Array ?");
  console.log(Array.from({ length: nbOfRedStar }));

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
