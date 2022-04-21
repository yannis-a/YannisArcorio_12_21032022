import { getUserMainData } from "../services/dataService.js";

export async function getUserInformation(id) {
    let res;
    try {
      const userData = await getUserMainData(id);
      res = userData.data.userInfos
    } catch (err) {
      console.error(err);
    }
    return res;
  }