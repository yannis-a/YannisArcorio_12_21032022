import React from "react";
import NutritionCard from "./NutritionCard";

const ProfilNutrition = ({ data }) => {
  let cards;
  if (data.length > 0) {
    cards = data.map((d) => <NutritionCard key={d.id} data={d} />);
  }
  return <div className="nutritions">{cards}</div>;
};

export default ProfilNutrition;
