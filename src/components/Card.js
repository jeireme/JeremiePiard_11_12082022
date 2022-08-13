import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #FF6060;
  border-radius: 10px;
  width: 340px;
  height: 340px;
`;

const CardTitle = styled.div`
  position: relative;
  color: white;
  margin-left: 20px;
  top: 82%;
  line-height: 22px;
  font-weight: 100;
`;

function Card() {
  return (
    <CardContainer>
      <CardTitle>Titre de la <br/> location</CardTitle>
    </CardContainer>
  );
}

export default Card;
