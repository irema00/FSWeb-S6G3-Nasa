import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
  max-height: 90vh;
  padding-left: 5.5rem;
  margin-right: 20rem;
`;

const Credit = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;
function ImageDisplay({ apodData, apodType, copyright, data }) {
  if (apodType === "image") {
    return (
      <Container>
        <Image src={apodData} alt="nasa" />
        <Credit>Image Credit & Copyright: {copyright}</Credit>
      </Container>
    );
  } else if (apodType === "video" && data && data.video) {
    return (
      <>
        <Container>
          <ReactPlayer url={apodData} controls={true} />
          <Credit>Image Credit & Copyright: {copyright}</Credit>
        </Container>
      </>
    );
  }
}

export default ImageDisplay;
