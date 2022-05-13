import { getUserMainData } from "./dataService.js";

/**
 * format score data
 * @param {int} id
 * @returns formatted data
 */
export async function getScoreData(id) {
  let res = {};

  try {
    const data = await getUserMainData(id);

    const score = data.data.todayScore ?? data.data.score;
    const percent = score * 100;
    res = {
      score: [
        {
          score: score,
          fill: "#ff0000",
        },
        {
          score: 1 - score,
          fill: "#fff",
        },
      ],
      percent: percent,
    };
  } catch (err) {
    console.error(err);
  }
  return res;
}
