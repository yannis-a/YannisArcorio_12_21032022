import { getUserActivity } from "../services/dataService.js";

export async function getActivity(id) {
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
