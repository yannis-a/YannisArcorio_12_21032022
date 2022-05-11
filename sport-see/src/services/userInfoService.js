import { getUserMainData } from "../services/dataService.js";

/**
 * format user informations data 
 * @param {int} id 
 * @returns formatted data
 */
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
