import React from "react";

const NutritionCard = ({ data }) => {
  return (
    <div className="nutritionCard">
      <img src={data.src} alt={data.text} />
      <div>
        <span>{data.value}</span>
        <span>{data.text}</span>
      </div>
    </div>
  );
};

export default NutritionCard;
