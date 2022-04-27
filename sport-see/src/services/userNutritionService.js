import { getUserMainData } from "../services/dataService.js";

export async function getNutritionData(id) {
  let res;
  try {
    const data = await getUserMainData(id);
    res = data.data.keyData;
  } catch (err) {
    console.error(err);
  }
  return res;
}