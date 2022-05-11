import React from "react";

const NutritionCard = ({ data }) => {
  return (
    <div className="nutritionCard">
      <span>
        <img src={data.src} alt={data.text} />
      </span>
      <div>
        <span>{data.value}</span>
        <span>{data.text}</span>
      </div>
    </div>
  );
};

export default NutritionCard;
