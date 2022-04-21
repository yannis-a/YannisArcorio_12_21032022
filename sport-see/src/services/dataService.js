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

export async function getUserMainData(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_MAIN_DATA, userId);
  } else {
    response = USER_MAIN_DATA;
  }
  return response;
}

export async function getUserActivity(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_ACTIVITY, userId);
  } else {
    response = USER_ACTIVITY;
  }
  return response;
}

export async function getUserAverageSessions(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_AVERAGE_SESSIONS, userId);
  } else {
    response = USER_AVERAGE_SESSIONS;
  }
  return response;
}

export async function getUserPerformance(userId) {
  let response;
  if (USE_API) {
    response = await apiCall(ROUTE_PERFORMANCE, userId);
  } else {
    response = USER_PERFORMANCE;
  }
  return response;
}
