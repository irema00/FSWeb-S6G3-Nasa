import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/Header/NavBar";
import ApodCard from "./components/Body/ApodCard";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState([]);
  const [apodType, setApodType] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const inputChange = (evt) => {
    const { value } = evt.target;
    setInputValue(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Zeh2jmucMoOtzd71ymHPU1kNDmWQZbdl5vbVeJg3&date=${inputValue}`
      )
      .then((response) => {
        setApodData(response.data.hdurl);
        setApodType(response.data.media_type);
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
        apodType={apodType}
        inputChange={inputChange}
      />
      <Footer />
    </div>
  );
}

export default App;
