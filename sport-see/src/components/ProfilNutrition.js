import React from "react";
import PropTypes from "prop-types";
import NutritionCard from "./NutritionCard";

/**
 * make up {@link NutritionCard} 
 * 
 * Call from {@link Profile}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component
 */
const ProfilNutrition = ({ data }) => {
  let cards;
  if (data.length > 0) {
    cards = data.map((d) => <NutritionCard key={d.id} data={d} />);
  }
  return <div className="nutritions">{cards}</div>;
};


ProfilNutrition.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.array.isRequired
};

export default ProfilNutrition;
