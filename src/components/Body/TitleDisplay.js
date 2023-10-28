import React from "react";

function TitleDisplay({ title }) {
  return (
    <div className="description-container">
      <div className="description">
        {" "}
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default TitleDisplay;
