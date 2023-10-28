import React from "react";
import ReactPlayer from "react-player";

function ImageDisplay({ apodData, apodType, copyright }) {
  if (apodType === "image") {
    return (
      <div className="img-container">
        <img className="img" src={apodData} alt="nasa" />
        <div className="copyright container">
          <div className="copyright">
            {" "}
            <p>Image Credit & Copyright: {copyright}</p>
          </div>
        </div>
      </div>
    );
  } else if (apodType === "video") {
    return (
      <>
        <div>
          <ReactPlayer url={apodData.video} />
        </div>
        <div className="copyright container">
          <div className="copyright">
            <p>Image Credit & Copyright:{copyright}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ImageDisplay;
