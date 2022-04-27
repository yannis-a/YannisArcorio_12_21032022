import { getUserAverageSessions } from "./dataService.js";

export async function getObjectifsData(id) {
  let res = [];

  try {
    const data = await getUserAverageSessions(id);
    data.data.sessions.map((item) => {
      return res.push({
        ...item
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}
