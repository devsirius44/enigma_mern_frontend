import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  isAuthenticated as isAuthenticatedValue,
  userToken,
} from "../stores/auth";
import SideMenu from "../layouts/side-menu/Main";
import { useEffect, useState } from "react";
import { login } from "../apis/users";

export const ProtectedRoute = () => {
  const [isAuthenticated, setAuthenticated] =
    useRecoilState(isAuthenticatedValue);
  const [token, setToken] = useRecoilState(userToken);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Check auth
    const curTime = Date.now();
    const loginTime = localStorage.getItem("logintime");
    setTimeout(() => {
      localStorage.removeItem("logintime");
      navigate("/login");
    }, 1000 * 60 * 60);

    if (curTime - loginTime <= 1000 * 60 * 60) {
      setAuthenticated(() => "1");
      localStorage.setItem("isAuthenticated", true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      setToken(() => null);
      setAuthenticated(() => null);
      navigate("/login");
    }
    setLoading(false);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return loading ? <div className="loading" /> : <SideMenu />;
};
