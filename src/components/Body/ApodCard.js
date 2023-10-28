import React from "react";
import ImageDisplay from "./ImageDisplay";
import DescriptionDisplay from "./DescriptionDisplay";
import TitleDisplay from "./TitleDisplay";

import Input from "./Input";
const ApodCard = (props) => {
  const {
    apodData,
    apodType,
    inputChange,
    date,
    explanation,
    copyright,
    title,
  } = props;

  return (
    <>
      <div className="card-container body">
        <div className="input-container">
          <Input date={date} inputChange={inputChange} />
        </div>{" "}
        <div className="title-container">
          <TitleDisplay title={title} />
        </div>
        <div className="img-container">
          <ImageDisplay
            apodData={apodData}
            apodType={apodType}
            copyright={copyright}
          />
        </div>
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
