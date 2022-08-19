import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import accomodationsDatas from "../data/accomodationsDatas.json";

const CardsContainer = styled.div`
  /* border: pink solid 2px; */
  background-color: #f6f6f6;
  margin-top: 40px;
  padding: 50px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  height: fit-content;
`;

const StyledLink = styled(Link)`
  /* border: blue solid 1px; // ? Aide débug de l'affichage décalé des cards */
  text-decoration: none;
  width: 340px;
  height: 340px;
  
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
