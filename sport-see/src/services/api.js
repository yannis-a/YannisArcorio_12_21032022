import { HOST } from "./config";

export async function apiCall(route, userId) {
    route = route.replace(":userId", userId);

    let response = await fetch(HOST + route);
    
    return response.json;
}