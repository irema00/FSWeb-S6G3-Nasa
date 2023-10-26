import React, { Component } from "react";
import ReactPlayer from "react-player";

function ImageDisplay({ apodData, apodType }) {
  if (apodType === "image") {
    return (
      <div className="img-container">
        <img src={apodData} alt="nasa" />
      </div>
    );
  } else {
    return (
      <div>
        <ReactPlayer url={apodData} />
      </div>
    );
  }
}

export default ImageDisplay;
