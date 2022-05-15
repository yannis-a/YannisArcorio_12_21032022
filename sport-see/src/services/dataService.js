import { apiCall } from "./api";
import {
  ROUTE_MAIN_DATA,
  ROUTE_ACTIVITY,
  ROUTE_AVERAGE_SESSIONS,
  ROUTE_PERFORMANCE,
  USE_API,
} from "./config.js";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData.js";

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
 * gets the data of user
 * @param {number} userId
 * @returns json object
 */
export async function getUserMainData(userId) {
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
  return response;
}

/**
 * gets the data of activity
 * @param {number} userId
 * @returns json object
 */
export async function getUserActivity(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_ACTIVITY, userId);
  } else {
    response = {
      data: USER_ACTIVITY.filter(
        (item) => Number(item.userId) === Number(userId)
      )[0],
    };
  }
  return response;
}

/**
 * gets the data of averrage sessions
 * @param {number} userId
 * @returns json object
 */
export async function getUserAverageSessions(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_AVERAGE_SESSIONS, userId);
  } else {
    response = {
      data: USER_AVERAGE_SESSIONS.filter(
        (item) => Number(item.userId) === Number(userId)
      )[0],
    };
  }
  return response;
}

/**
 * gets the data of performance
 * @param {number} userId
 * @returns json object
 */
export async function getUserPerformance(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_PERFORMANCE, userId);
  } else {
    response = {
      data: USER_PERFORMANCE.filter(
        (item) => Number(item.userId) === Number(userId)
      )[0],
    };
  }
  return response;
}
