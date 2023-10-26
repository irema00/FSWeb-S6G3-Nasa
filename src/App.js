import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/Header/NavBar";
import ApodCard from "./components/Body/ApodCard";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState([]);
  const [apodType, setApodType] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [copyright, setCopyright] = useState([]);
  const [apodTitle, setApodTitle] = useState([]);

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
        setApodTitle(response.data.apodTitle);
      })
      .catch((error) => {
        console.error("Error fetching APOD data: ", error);
      });
  }, [inputValue]);

  return (
    <div>
      <NavBar />
      <ApodCard
        apodData={apodData}
        copyright={copyright}
        apodType={apodType}
        explanation={explanation}
        inputChange={inputChange}
        apodTitle={apodTitle}
      />
      <Footer />
    </div>
  );
}

export default App;
