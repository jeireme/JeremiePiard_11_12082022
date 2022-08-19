import React from "react";
import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import aboutDatas from "../data/aboutDatas.json";
import styled from "styled-components";

const datas = aboutDatas;

const DropdownContainer = styled.div`
  margin-bottom: 200px;
`;

function About() {
  return (
    <>
      <BannerAbout />
      <DropdownContainer>
        {datas.map((data) => (
          <Dropdown
            title={Object.keys(data)[0]}
            description={Object.values(data)}
          />
        ))}
      </DropdownContainer>
      <Footer />
    </>
  );
}

export default About;
