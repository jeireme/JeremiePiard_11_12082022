import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  background-color: #ff6060;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 10px;
  margin-right: 10px;
  `;

const Name = styled.div`
  min-width: fit-content;
  text-align: center;
  margin: 0 30px;
  width: fit-content;
  font-size: 14px;
  font-weight: 100;
  color: white;
`;

function Tag({ tag }) {
  return (
    <TagContainer>
      <Name>{tag}</Name>
    </TagContainer>
  );
}

export default Tag;
