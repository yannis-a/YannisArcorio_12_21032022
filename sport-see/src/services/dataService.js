import { apiCall } from "./api";
import { ROUTE_MAIN_DATA, USE_API } from "./config.js";

import { USER_MAIN_DATA } from "./mockData.js";

/**
 * check if api is up
 * @param {number} userId
 * @returns boolean
 */
export async function APIisUp(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_MAIN_DATA, userId);
  } else {
    response = {};
  }

  return response !== undefined;
}

/**
 * check if user exist
 * @param {number} userId
 * @returns boolean
 */
export async function userExist(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_MAIN_DATA, userId);
  } else {
    response = {
      data: USER_MAIN_DATA.filter(
        (item) => Number(item.id) === Number(userId)
      )[0],
    };
  }

  return response.data !== undefined;
}

/**
 * gets the data from api or mock
 * @param {number} userId
 * @param {string} path
 * @param {object} mockData
 * @returns json object
 */
export async function getData(userId, path, mockData) {
  let response;
  if (USE_API) {
    response = await apiCall(path, userId);
  } else {
    console.log(mockData);
    response = {
      data: mockData.filter((item) => {
        if (item.id) {
          return Number(item.id) === Number(userId);
        } else {
          return Number(item.userId) === Number(userId);
        }
      })[0],
    };
  }
  console.log(response);
  return response;
}
