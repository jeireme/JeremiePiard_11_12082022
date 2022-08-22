import React from "react";
import { useLocation /*useParams*/ } from "react-router-dom";
import accomodationsDatas from "../data/accomodationsDatas.json";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Rating from "../components/Rating";

const FlexDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto 20px auto;
  width: 97%;
  @media screen and (max-width: 1300px) {
    width: 82vw;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 90vw;
      margin-top: 40px;
    }
  }
`;

const FlexTagsRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px auto;
  width: 97%;
  height: 40px;
  @media screen and (max-width: 1300px) {
    width: 82vw;
    @media screen and (max-width: 800px) {
      height: 60px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 90vw;
    }
  }
`;

const FlexTitleProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto 20px auto;
  width: 97%;
  @media screen and (max-width: 1300px) {
    width: 82vw;
    @media screen and (max-width: 800px) {
      margin-top: -15px;
      width: 90vw;
      flex-direction: column;
    }
  }
`;

const TitleContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

const Location = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const ProfileContainer = styled.div`
  margin-top: 5px;
  display: flex;
  height: 90px;
  align-items: flex-end;
  @media screen and (max-width: 800px) {
    position: relative;
    top: -5px;
    left: 100%;
    transform: translate(-100%, 0);
    margin-bottom: -110px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: 10px;
  word-spacing: 1000px;
  text-align: right;
  width: 100px;
  height: fit-content;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-bottom: 5px;
    font-weight: 500;
  }
`;

const Picture = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-size: cover;
  @media screen and (max-width: 800px) {
    width: 45px;
    height: 45px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
`;

const RateContainer = styled.div`
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const DropdownContainer = styled.div`
  margin-top: 0px;
  width: 582px;
  min-height: 350px;
  @media screen and (max-width: 1300px) {
    min-height: inherit;
    width: 100%;
    @media screen and (max-width: 800px) {
      margin-bottom: -10px;
    }
  }
`;

function Accomodations() {
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
      <Gallery pictures={datas.pictures} />
      <FlexTitleProfileContainer>
        <TitleContainer>
          <Title>{datas.title}</Title>
          <Location>{datas.location}</Location>
        </TitleContainer>
        <ProfileContainer>
          <Name>{datas.host.name}</Name>
          <Picture
            style={{ backgroundImage: `url(${datas.host.picture})` }}
          ></Picture>
        </ProfileContainer>
      </FlexTitleProfileContainer>
      <FlexTagsRatingContainer>
        <TagsContainer>
          {datas.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </TagsContainer>
        <RateContainer>
          <Rating number={datas.rating} />
        </RateContainer>
      </FlexTagsRatingContainer>
      <FlexDropdownContainer>
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
      </FlexDropdownContainer>
      <Footer />
    </>
  );
}

export default Accomodations;
