import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userToken, isAuthenticated } from "@/stores/auth";
import { useEffect, useState } from "react";
import { login } from "../../apis/users";
import { getBasicData } from "../../apis/sales";
import { showNotification } from "../../components/notification";
import LoadingSpinner from "../../components/loading-spinner";

function Main() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setToken] = useRecoilState(userToken);
  const [, setAuthenticated] = useRecoilState(isAuthenticated);

  const navigateTo = useNavigate();

  useEffect(() => {
    setToken(() => null);
    setAuthenticated(() => false);
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  }, []);

  const handleLogin = () => {
    if (username.length === 0 || password.length === 0) return;
    setLoading(true);
    login({ username: username, password: password })
      .then((res) => {
        console.log(res);
        if (res.data.result == 1) {
          let loginTime = Date.now();
          setToken(() => res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("logintime", loginTime);

          getBasicData()
            .then((res) => {
              localStorage.setItem("menudata", JSON.stringify(res.data));
            })
            .catch((err) => {
              console.log(err);
            });

          showNotification("success", "Success", "Login Success");
          navigateTo("/employees/all-employees");
        } else {
          showNotification("warning", "Warning", res.data.message);
        }
      })
      .catch((err) => {
        showNotification("error", "Error", err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        {loading ? <LoadingSpinner /> : <></>}
        {/* <DarkModeSwitcher /> */}
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Login Info */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <a href="" className="-intro-x flex items-center pt-5">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="text-white text-lg ml-3"> mySTOVE </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src={illustrationUrl}
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage your STOVE account.
                </div>
                <div className="-intro-x mt-3 text-md text-white text-opacity-70 dark:text-slate-400">
                  Don't have a STOVE account?{" "}
                  <a
                    href="http://stovepos.com"
                    target="_blank"
                    className="text-white text-lg"
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Sign In
                </h2>
                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage your
                  STOVE account.
                </div>
                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                  Don't have a STOVE account?{" "}
                  <a
                    href="http://stovepos.com"
                    target="_blank"
                    className="text-slate-600"
                  >
                    Click here
                  </a>
                </div>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                  <div className="flex items-center mr-auto">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="form-check-input border mr-2"
                    />
                    <label
                      className="cursor-pointer select-none"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    onClick={() => {
                      navigateTo("/forgot-password");
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                    Register
                  </button>
                </div>
                <div className="intro-x mt-5 xl:mt-7 text-slate-600 dark:text-slate-500 text-center">
                  <a
                    className="text-primary dark:text-slate-200"
                    href="https://stovepos.com/help"
                    target="_blank"
                  >
                    Need help?
                  </a>
                </div>
                <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                  By signin up, you agree to our <span></span>
                  <a className="text-primary dark:text-slate-200" href="">
                    Terms and Conditions
                  </a>
                  <span> </span>&<span> </span>
                  <a className="text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
