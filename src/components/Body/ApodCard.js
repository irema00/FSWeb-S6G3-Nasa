import React from "react";
import ImageDisplay from "./ImageDisplay";
import DescriptionDisplay from "./DescriptionDisplay";
import TitleDisplay from "./TitleDisplay";
import styled from "styled-components";
import Input from "./Input";

const CardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: lightgoldenrodyellow;
  width: 100%;
  border-bottom: 1px solid #3333;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
`;
const HeaderContainer = styled.div`
  background-color: purple;
  display: flex;

  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  margin-top: 0;
`;

const InputContainer = styled.div`
  background-color: lightseagreen;
  padding-top: 0.3rem;
  padding-left: 0.3rem;

  bottom: 0;
`;

const ContentContainer = styled.h2`
  display: flex;
  margin-top: 3rem;
  background-color: lightcoral;
  position: absolute;
`;

const ImgContainer = styled.div`
  height: auto;
  background-color: orange;
  display: flex;
  padding-top: 2rem;
  flex-direction: row;
`;

const DescriptionContainer = styled.div`
  background-color: lightblue;
  display: flex;
  width: 25rem;
  height: 12rem;
`;

const ApodCard = (props) => {
  const {
    apodData,
    apodType,
    inputChange,
    date,
    explanation,
    copyright,
    title,
  } = props;

  return (
    <>
      <CardContainer>
        {" "}
        <ContentContainer>
          <TitleDisplay title={title} />{" "}
        </ContentContainer>{" "}
        <InputContainer>
          <Input date={date} inputChange={inputChange} />
          <HeaderContainer>
            <Title>THE ASTRONOMICAL PICTURE OF THE DAY</Title>{" "}
          </HeaderContainer>
        </InputContainer>
        <ImgContainer>
          {" "}
          <ImageDisplay
            apodData={apodData}
            apodType={apodType}
            copyright={copyright}
          />
          <DescriptionContainer>
            <DescriptionDisplay explanation={explanation} />
          </DescriptionContainer>
        </ImgContainer>{" "}
      </CardContainer>
    </>
  );
};
export default ApodCard;
