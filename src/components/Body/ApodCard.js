import React from "react";
import ImageDisplay from "./ImageDisplay";
import DescriptionDisplay from "./DescriptionDisplay";
import TitleDisplay from "./TitleDisplay";
import styled from "styled-components";
import Input from "./Input";

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Title = styled.h3`
  display: flex;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  justify-content: flex-start;
  margin-bottom: 5rem;
`;
const ContentContainer = styled.h2`
  display: flex;
  margin-right: 2rem;
  margin-left: 3rem;
  background-color: white;
  max-width: 700px;
  font-family: Arial, Helvetica, sans-serif;
`;
const InputContainer = styled.div`
  margin-left: 1rem;
  margin-top: 2em;
  border: solid 2px;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: right;
  font-style: italic;
  margin-top: 6rem;
  max-width: 900px;
  max-height: 900px;
  margin-bottom: 5rem;
`;
const DescriptionContainer = styled.div`
  max-width: 450px;
  overflow: auto;
  font-size: 13px;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <Column>
          <InputContainer>
            <Input date={date} inputChange={inputChange} />
          </InputContainer>

          <Title>THE ASTRONOMICAL PICTURE OF THE DAY</Title>
        </Column>{" "}
        <ImgContainer>
          {" "}
          <ImageDisplay
            apodData={apodData}
            apodType={apodType}
            copyright={copyright}
          />
        </ImgContainer>{" "}
        <Column2>
          {" "}
          <ContentContainer>
            <TitleDisplay title={title} />
          </ContentContainer>
          <DescriptionContainer>
            <DescriptionDisplay explanation={explanation} />
          </DescriptionContainer>
        </Column2>
      </CardContainer>
    </>
  );
};
export default ApodCard;
