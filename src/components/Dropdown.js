import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import { useState, useRef } from "react";

const DropdownContainer = styled.div`
  max-width: 1023px;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 100;
`;
const TitleContainer = styled.div`
  background-color: #ff6060;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 33px;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Title = styled.div``;

const Icon = styled.div`
  display: flex;
  /* margin-right: 5px; */
  rotate: 180deg;
  transition: rotate 0.3s ease;
  /* border: green solid 2px; */
`;

const TextContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 0px 20px;
  height: 0px;
  /* border: blue solid 2px; */
  overflow: hidden;
  transition: height 0.4s ease;
`;

function Dropdown({ title, description, equipments }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEquipment, setIsEquipment] = useState(equipments ? true : false);
  const textContainerRef = useRef(); // pour déterminer la height via scrollHeight APRÈS le render

  if (Array.isArray(description)) description = description.join("\n");

  return (
    <DropdownContainer>
      <TitleContainer onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Icon style={isOpen ? { rotate: 0 + "deg" } : { rotate: 180 + "deg" }}>
          <img src={arrow} alt="Bouton d'affichage de la description" />
        </Icon>
      </TitleContainer>
      <TextContainer
        ref={textContainerRef}
        style={
          isOpen
            ? { height: textContainerRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <p style={isEquipment ? { whiteSpace: "pre" } : { whiteSpace: "" }}>
          {description}
        </p>
      </TextContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
