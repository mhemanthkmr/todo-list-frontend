import axios from "axios";
import auth from "./authService";

const apiUrl = "https://node.mhemanthkmr.live/api/auth/";
const apiEndpoint = apiUrl + "signup";

async function register(name, email, password) {
  console.log(name, email, password);
  const response = await axios.post(apiEndpoint, { name, email, password });
  console.log(response.headers["x-auth-token"]);
  localStorage.setItem(auth.tokenKey, response.headers["x-auth-token"]);
  window.location = "/";
}

export default {
  register,
};
