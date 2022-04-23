import axios from 'axios';

/**
 * @description gets user activities data from backend
 * backend must run on localhost:3000, otherwise change line 9
 * imports all user data with Axios
 */

/** Create a new instance of axios with custom config : baseUrl = API URL*/
const baseURL = axios.create({
  baseURL: "http://localhost:3000/user",
});

/** Make requests for a user with a given ID */
export const getUserMainData = (id) => baseURL.get(`/${id}`); //userStory 5, 8 & 10
export const getUserActivity = (id) => baseURL.get(`/${id}/activity`); //userStory 6
export const getUserAverageSessions = (id) => baseURL.get(`/${id}/average-sessions`); //userStory 7
export const getUserPerformance = (id) => baseURL.get(`/${id}/performance`); //userStory 9