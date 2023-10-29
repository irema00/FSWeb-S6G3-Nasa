import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Credit = styled.div``;
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
