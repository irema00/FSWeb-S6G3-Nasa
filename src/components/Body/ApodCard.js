import React from "react";

import Apod from "./Apod";

const ApodCard = (props) => {
  const { image, description } = props;

  return (
    <div className="image-container">
      <div className="image">{/* image link çekilecek */}</div>
      <div className="description">{/* description çekilecek */}</div>
    </div>
  );
};

export default ApodCard;
