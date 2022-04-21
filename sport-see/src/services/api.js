import { HOST } from "./config";

/**
 * call the api P9 project openclassrooms
 * @param {string} route 
 * @param {int} userId 
 * @returns json object
 */
export async function apiCall(route, userId) {
    route = route.replace(":userId", userId);
    const response = await fetch(HOST + route);
    return response.json();
}