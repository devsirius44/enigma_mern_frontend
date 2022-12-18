import { atom } from "recoil";

const userToken = atom({
  key: "userTokenValue",
  default: localStorage.getItem("token"),
});

const isAuthenticated = atom({
  key: "isAuthenticatedValue",
  default: localStorage.getItem("isAuthenticated"),
});

export { userToken, isAuthenticated };
