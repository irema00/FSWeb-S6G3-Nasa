import React from "react";
import ImageDisplay from "./ImageDisplay";

import Input from "./Input";
const ApodCard = (props) => {
  const { apodData, apodType, inputChange, date } = props;

  return (
    <>
      <div className="image-container">
        <div className="image">
          <ImageDisplay apodData={apodData} apodType={apodType} />
        </div>
        <div className="description">{apodData.description}</div>
      </div>
      <div className="Input">
        <Input date={date} inputChange={inputChange} />
      </div>
    </>
  );
};

export default ApodCard;
