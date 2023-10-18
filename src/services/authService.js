import jwtDecode from "jwt-decode";
import http from "./httpService";
import axios from "axios";

const apiUrl = "https://node.mhemanthkmr.live/api";

const apiEndpoint = apiUrl + "/auth/signin";
const tokenKey = "jwtPrivateToken";

function getJwt() {
  return localStorage.getItem(tokenKey);
}

http.setJwt(getJwt());

function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/";
}

async function login(email, password) {
  const response = await axios.post(apiEndpoint, { email, password });
  console.log(response.data);
  localStorage.setItem(tokenKey, response.data.token);
  window.location = "/";
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt,
  tokenKey,
};
