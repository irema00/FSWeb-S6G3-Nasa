import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=S2m9PKcrcHmtlcPp2S3FndDB8I41NyibbxE7qlvP"
      )
      .then((response) => {
        setApodData(response.data.url);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Body apodData={apodData} />
      <Footer />
    </div>
  );
}

export default App;
