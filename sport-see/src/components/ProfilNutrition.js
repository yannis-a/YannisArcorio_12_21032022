import React from "react";
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

export default ProfilNutrition;
