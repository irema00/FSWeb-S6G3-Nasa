import React from "react";

function DescriptionDisplay({ explanation }) {
  return (
    <div className="description-container">
      <div className="description">{explanation}</div>
    </div>
  );
}

export default DescriptionDisplay;
