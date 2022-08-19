import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import accomodationsDatas from "../data/accomodationsDatas.json";

const CardsContainer = styled.div`
  background-color: #f6f6f6;
  margin-top: 40px;
  margin: 40px auto 0 auto;
  padding: 50px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  width: fit-content;
  height: fit-content;
  @media screen and (max-width: 1300px) {
    width: fit-content;
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 800px) {
      background-color: inherit;
      margin-top: 20px;
      padding: 0;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  /* border: blue solid 1px; */
  text-decoration: none;
  margin: auto;
  width: 340px;
  height: 340px;
  @media screen and (max-width: 1300px) {
    width: 35vw;
    height: 35vw;
    @media screen and (max-width: 800px) {
      width: 90vw;
      height: 55vw;
    }
  }
`;

function Homepage() {
  const datas = accomodationsDatas;

  return (
    <>
      <Banner />
      <CardsContainer>
        {datas.map((data) => (
          <StyledLink
            to={"/JeremiePiard_11_12082022/logement/" + data.id}
            key={data.id}
          >
            <Card {...data} />
          </StyledLink>
        ))}
      </CardsContainer>
      <Footer />
    </>
  );
}

export default Homepage;
