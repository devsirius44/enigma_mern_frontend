import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { HomeRoute } from "./HomeRoute";
import { isAuthenticated as isAuthenticatedValue } from "../stores/auth";

export const AuthRoute = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedValue);

  if (isAuthenticated||true) {
    return <HomeRoute />;
  }

  return (
    <Outlet />
  );
};
