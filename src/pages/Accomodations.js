import React from "react";
import { useLocation /*useParams*/ } from "react-router-dom";
import accomodationsDatas from "../data/accomodationsDatas.json";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Rating from "../components/Rating";

const FlexContainer = styled.div`
  /* border: green solid 1px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 300;
  /* letter-spacing: 1px; */
`;

const Location = styled.div`
  margin-top: 5px;
  font-weight: 300;
  font-size: 18px;
`;

const ProfileContainer = styled.div`
  /* border: pink solid 1px; */
  margin-top: 5px;
  display: flex;
  height: 100px;
  align-items: center;
`;

const Name = styled.div`
  /* border: brown solid 1px; */
  font-size: 18px;
  margin-right: 10px;
  word-spacing: 1000px;
  text-align: right;
  width: 100px;
  height: fit-content;
`;

const Picture = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-size: cover;
`;

const TagsContainer = styled.div`
  display: flex;
`;

const RateContainer = styled.div``;

const DropdownContainer = styled.div`
  margin-top: 0px;
  width: 582px;
  min-height: 350px;
  /* border: pink solid 1px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  justify-content: start;
  align-content: start; */
`;

function Accomodations() {
  console.clear();

  const pathname = useLocation().pathname;
  let id = pathname.replace("/JeremiePiard_11_12082022/logement/", "");
  let datas = accomodationsDatas.find((data) => data.id === id);

  if (!accomodationsDatas.filter((data) => data.id === id).length > 0) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return (
    <>
      <Carousel pictures={datas.pictures} />
      <FlexContainer>
        <TitleContainer>
          <Title>{datas.title}</Title>
          <Location>{datas.location}</Location>
        </TitleContainer>
        <ProfileContainer>
          {/* <div style={{ display: `table-caption` }}> */}
          <Name>{datas.host.name}</Name>
          {/* </div> */}
          <Picture
            style={{ backgroundImage: `url(${datas.host.picture})` }}
          ></Picture>
        </ProfileContainer>
      </FlexContainer>
      <FlexContainer>
        <TagsContainer>
          {datas.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </TagsContainer>
        <RateContainer>
          <Rating number={datas.rating} />
        </RateContainer>
      </FlexContainer>
      <FlexContainer>
        <DropdownContainer>
          <Dropdown title="Description" description={datas.description} />
        </DropdownContainer>
        <DropdownContainer>
          <Dropdown
            title="Équipement"
            description={datas.equipments}
            equipments
          />
        </DropdownContainer>
      </FlexContainer>
      <Footer />
    </>
  );
}

export default Accomodations;
