import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticated as isAuthenticatedValue } from "../stores/auth";

export const HomeRoute = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedValue);
  const location = useLocation();

  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};
