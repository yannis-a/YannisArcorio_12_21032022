import React from "react";
import PropTypes from "prop-types";

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

NutritionCard.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.object.isRequired
};

export default NutritionCard;
