import React from "react";

/**
 * Card of nutrition
 * 
 * Call from {@link ProfilNutrition}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component 
 */
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
