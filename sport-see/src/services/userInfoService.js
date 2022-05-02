import { getUserMainData } from "../services/dataService.js";

export async function getUserInformation(id) {
  let res;
  try {
    const data = await getUserMainData(id);
    res = data.data.userInfos;
  } catch (err) {
    console.error(err);
  }
  return res;
}
