import React from "react";

const NutritionCard = ({ data }) => {
  return (
    <div className="nutritionCard">
      <span className="h-16 w-16 rounded-md flex items-center justify-center">
        <img src={data.src} alt={data.text} />
      </span>
      <div className="flex flex-col ml-8">
        <span className="font-bold text-xl text-gray">{data.value}</span>
        <span className="font-medium text-sm text-textMuted">{data.text}</span>
      </div>
    </div>
  );
};

export default NutritionCard;
