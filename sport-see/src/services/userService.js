import { getData } from "./dataService.js";
import {
  ROUTE_MAIN_DATA,
  ROUTE_ACTIVITY,
  ROUTE_AVERAGE_SESSIONS,
  ROUTE_PERFORMANCE,
} from "./config.js";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData.js";

/**
 * format user informations data
 * @param {number} id
 * @returns formatted data
 */
export async function getUserInformation(id) {
  let res;
  try {
    const data = await getData(id, ROUTE_MAIN_DATA, USER_MAIN_DATA);
    res = data.data.userInfos;
  } catch (err) {
    console.error(err);
  }
  return res;
}

/**
 * format activity data
 * @param {number} id
 * @returns formatted data
 */
export async function getActivityData(id) {
  let res = [];
  try {
    const data = await getData(id, ROUTE_ACTIVITY, USER_ACTIVITY);
    data.data.sessions.map((activity) => {
      return res.push({
        ...activity,
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}

/**
 * format nutrition data
 * @param {number} id
 * @returns formatted data
 */
export async function getNutritionData(id) {
  let res;
  try {
    const data = await getData(id, ROUTE_MAIN_DATA, USER_MAIN_DATA);
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
        src: "/img/protein-icon.png",
      },
      {
        id: 2,
        value: `${data.data.keyData.carbohydrateCount}g`,
        text: "Glucides",
        src: "/img/carbs-icon.png",
      },
      {
        id: 3,
        value: `${data.data.keyData.lipidCount}g`,
        text: "Lipides",
        src: "/img/fat-icon.png",
      },
    ];
  } catch (err) {
    console.error(err);
  }
  return res;
}

/**
 * format objectif data
 * @param {number} id
 * @returns formatted data
 */
export async function getObjectifsData(id) {
  let res = [];

  function formatDay(day) {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  }

  try {
    const data = await getData(
      id,
      ROUTE_AVERAGE_SESSIONS,
      USER_AVERAGE_SESSIONS
    );
    data.data.sessions.map((item) => {
      return res.push({
        axeX: formatDay(item.day),
        axeY: item.sessionLength,
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}

/**
 * format radar chart data
 * @param {number} id
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
    const data = await getData(id, ROUTE_PERFORMANCE, USER_PERFORMANCE);
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

/**
 * format score data
 * @param {number} id
 * @returns formatted data
 */
export async function getScoreData(id) {
  let res = {};

  try {
    const data = await getData(id, ROUTE_MAIN_DATA, USER_MAIN_DATA);

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
