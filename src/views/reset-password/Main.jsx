import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { showNotification } from "../../components/notification";
import LoadingSpinner from "../../components/loading-spinner";
import { useEffect, useState } from "react";
import { resetPassword } from "../../apis/users";

function Main() {
  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  }, []);

  const [loading, setLoading] = useState(false);
  const [vcode, setVcode] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const onReset = () => {
    if (vcode === "") {
      showNotification("warning", "Warning", "Input Verification Code");
      return;
    }
    if (password === "" || password !== cPassword) {
      showNotification("warning", "Warning", "Confirm Password");
      return;
    }

    const body = { authkey: vcode, password: password };

    setLoading(true);
    resetPassword(body)
      .then((res) => {
        if (res.data.message !== "Your password was not reset") {
          showNotification("success", "Success", res.data.message);
          navigateTo("/login");
        }
        showNotification("warning", "Warning", res.data.message);
      })
      .catch((err) => {
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
                <h1 className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Please give us your new Password
                </h1>
              </div>
            </div>
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Reset Password
                </h2>
                <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Verify Code"
                    value={vcode}
                    onChange={(e) => {
                      setVcode(e.target.value);
                    }}
                  />
                </div>

                <div className="intro-x mt-8">
                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Confirm Password"
                    value={cPassword}
                    onChange={(e) => {
                      setCPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full align-top"
                    onClick={onReset}
                  >
                    Reset
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
