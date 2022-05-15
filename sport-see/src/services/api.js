import { HOST } from "./config";

/**
 * call the api P9 project openclassrooms
 * @param {string} route
 * @param {number} userId
 * @returns json object
 */
export async function apiCall(route, userId) {
  route = route.replace(":userId", userId);
  let response = undefined;
  try {
    response = await fetch(HOST + route);
    return response.json();
  } catch (error) {
    console.log(
      "Il y a eu un problème avec l'opération fetch: " + error.message
    );
  }
  return response;
}
