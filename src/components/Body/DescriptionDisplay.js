import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Description = styled.div`
  font-family: monospace;
`;

function DescriptionDisplay({ explanation }) {
  return (
    <Container>
      <Description>{explanation}</Description>
    </Container>
  );
}

export default DescriptionDisplay;
