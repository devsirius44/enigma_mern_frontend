import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import ResetPassword from "../../views/reset-password/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import { forgotPassword } from "../../apis/users";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loading-spinner";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../../components/notification";

function Main() {
  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  }, []);
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [userinfo, setUserinfo] = useState("");

  const onSubmit = () => {
    if (userinfo === "") return;

    const info = {};
    if (!isUsername) {
      info.email = userinfo;
    } else {
      info.username = userinfo;
    }

    console.log(info);
    setIsLoading(true);
    forgotPassword(info)
      .then((res) => {
        if (res.data.message === "Success") {
          navigateTo("/reset-password");
        } else {
          showNotification("warning", "Warning", "Invalid username or email");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        {isLoading ? <LoadingSpinner /> : <></>}
        <DarkModeSwitcher />
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Register Info */}
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
                  Never mind, <br></br>
                  it can happen to the best of us
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Please give us your registered email or username <br></br>
                  we'll send you a authkey to reset your password
                </div>
              </div>
            </div>
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Forgot Password?
                </h2>
                <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder={isUsername ? "Username" : "Email Address"}
                    value={userinfo}
                    onChange={(e) => {
                      setUserinfo(e.target.value);
                    }}
                  />
                </div>
                <div className="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={isUsername}
                    onChange={(e) => {
                      setIsUsername(e.target.checked);
                    }}
                    className="form-check-input border mr-2"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Use username instead of email
                  </label>
                </div>
                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {/* END: Register Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
