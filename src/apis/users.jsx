import axios from "./index";

export function login(user) {
  return axios.post(`/auth/login`, user);
}

export function forgotPassword(userinfo) {
  return axios.post(`/auth/forgot`, userinfo);
}

export function resetPassword(userinfo) {
  return axios.post(`/auth/resetpassword`, userinfo);
}
