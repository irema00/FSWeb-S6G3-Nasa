import React from "react";
import ReactPlayer from "react-player";

function ImageDisplay({ apodData, apodType, copyright }) {
  if (apodType === "image") {
    return (
      <div className="img-container">
        <img src={apodData} alt="nasa" />
        <div className="copyright container">
          <div className="copyright">{copyright}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ReactPlayer url={apodData.video} />
      </div>
    );
  }
}

export default ImageDisplay;
