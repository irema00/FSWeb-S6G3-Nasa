import React from "react";
import ImageDisplay from "./ImageDisplay";
import DescriptionDisplay from "./DescriptionDisplay";

import Input from "./Input";
const ApodCard = (props) => {
  const { apodData, apodType, inputChange, date, explanation, copyright } =
    props;

  return (
    <>
      <div className="image-container body">
        <div className="image">
          <ImageDisplay
            apodData={apodData}
            apodType={apodType}
            copyright={copyright}
          />
        </div>
        <div className="Input">
          <Input date={date} inputChange={inputChange} />
        </div>{" "}
        <div className="description-container">
          <div className="description">
            <DescriptionDisplay explanation={explanation} />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default ApodCard;
