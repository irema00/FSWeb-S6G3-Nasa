import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/Header/NavBar";
import ApodCard from "./components/Body/ApodCard";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [apodData, setApodData] = useState([]);
  const [apodType, setApodType] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [copyright, setCopyright] = useState([]);
  const [title, settitle] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const inputChange = (evt) => {
    const { value } = evt.target;
    setInputValue(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=S2m9PKcrcHmtlcPp2S3FndDB8I41NyibbxE7qlvP&date=${inputValue}`
      )
      .then((response) => {
        setApodData(response.data.hdurl);
        setApodType(response.data.media_type);
        setExplanation(response.data.explanation);
        setCopyright(response.data.copyright);
        settitle(response.data.title);

        console.log("buradayım", response.data.title);
      })
      .catch((error) => {
        console.error("Error fetching APOD data: ", error);
      });
  }, [inputValue]);

  return (
    <>
      <Container>
        <NavBar apodData={apodData} />
        <ApodCard
          apodData={apodData}
          copyright={copyright}
          apodType={apodType}
          explanation={explanation}
          inputChange={inputChange}
          title={title}
        />
        <Footer />
      </Container>
    </>
  );
}

export default App;
