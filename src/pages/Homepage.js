import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styled from "styled-components";

const CardsContainer = styled.div`
  background-color: #f6f6f6;
  margin-top: 40px;
  padding: 50px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px; 
`;

function Homepage() {
  return (
    <>
      <Banner />
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
      <Footer />
    </>
  );
}

export default Homepage;
