import { getUserActivity } from "./dataService.js";

/**
 * format activity data 
 * @param {int} id 
 * @returns formatted data
 */
export async function getActivityData(id) {
  let res = [];
  try {
    const data = await getUserActivity(id);
    data.data.sessions.map((activity) => {
      return res.push({
        ...activity
      });
    });
  } catch (err) {
    console.error(err);
  }
  return res;
}
