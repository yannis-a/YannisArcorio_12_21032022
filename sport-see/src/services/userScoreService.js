import { getUserMainData } from "./dataService.js";

export async function getScoreData(id) {
  let res = {};

  try {
    const data = await getUserMainData(id);
    res = {
      value: data.data.todayScore ?? data.data.score,
      label: "de votre objectif",
    };
  } catch (err) {
    console.error(err);
  }
  return res;
}
