import { getUserAverageSessions } from "./dataService.js";

export async function getObjectifsData(id) {
  let res = [];

  function formatDay(day) {
    switch(day) {
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
    const data = await getUserAverageSessions(id);
    data.data.sessions.map((item) => {
      return res.push({
        axeX : formatDay(item.day),
        axeY : item.sessionLength
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}
