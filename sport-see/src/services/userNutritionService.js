import { getUserMainData } from "../services/dataService.js";

export async function getNutritionData(id) {
  let res;
  try {
    const data = await getUserMainData(id);
    res = [
      {
        id: 0,
        value: `${data.data.keyData.calorieCount}kCal`,
        text: "Calories",
        src: "/img/calories-icon.png",
      },
      {
        id: 1,
        value: `${data.data.keyData.proteinCount}g`,
        text: "Protéines",
        icon: "/img/protein-icon.png",
      },
      {
        id: 2,
        value: `${data.data.keyData.carbohydrateCount}g`,
        text: "Glucides",
        icon: "/img/carbs-icon.png",
      },
      {
        id: 3,
        value: `${data.data.keyData.lipidCount}g`,
        text: "Lipides",
        icon: "/img/fat-icon.png",
      },
    ];
  } catch (err) {
    console.error(err);
  }
  return res;
}
