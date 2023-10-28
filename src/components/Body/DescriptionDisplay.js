import React from "react";

function DescriptionDisplay({ explanation }) {
  return (
    <div className="description-container">
      <div className="description">
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default DescriptionDisplay;
