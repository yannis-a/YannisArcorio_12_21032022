import { getUserPerformance } from "./dataService.js";


/**
 * format radar chart data 
 * @param {int} id 
 * @returns formatted data
 */
export async function getRadarData(id) {
  let res = [];

  const translate = (kind) => {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Énergie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return "";
    }
  };

  try {
    const data = await getUserPerformance(id);
    data.data.data.map((item) => {
      return res.push({
        value: item.value,
        label: translate(data.data.kind[item.kind]),
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}
