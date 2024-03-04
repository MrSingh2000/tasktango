import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../helpers/index.js";
import { updateUserState } from "../redux/reducers/userSlice.js";
import { updateLoading } from "../redux/reducers/loadingSlice.js";
import Loader from "../components/Loader.js";

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((store) => store.loading.value);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const userSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "*Too short")
      .max(18, "*Too long")
      .required("*Please enter a username"),
    password: yup
      .string()
      .min(8, "*Too short")
      .max(20, "*Too long")
      .required("*Enter a password"),
  });

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    dispatch(updateLoading(true));
    setUsernameError("");
    setPasswordError("");
    setError("");
    const isValid = await userSchema.isValid(data);
    if (isValid) {
      axios
        .post(`${process.env.REACT_APP_HOST}/api/auth/login`, data)
        .then((res) => {
          const authToken = res.data.data.authToken;

          axios({
            url: `${process.env.REACT_APP_HOST}/api/profile/get`,
            method: "GET",
            headers: {
              authToken: authToken,
            },
          })
            .then((response) => {
              console.log("respose: ", response);
              const userInfo = response.data.data.user;
              dispatch(
                updateUserState({
                  authToken,
                  name: userInfo.name,
                  username: userInfo.username,
                  email: userInfo.email,
                  img: userInfo.img,
                })
              );
              dispatch(updateLoading(false));
              navigate("/");
            })
            .catch((error) => {
              dispatch(updateLoading(false));
              showToast(error.response.data.error.message, "error");
            });
        })
        .catch((err) => {
          dispatch(updateLoading(false));
          showToast(err.response.data.error.message, "error");
        });
    } else {
      try {
        userSchema.validateSync(data, { abortEarly: false });
      } catch (validationError) {
        dispatch(updateLoading(false));
        showToast("Could not complete Sign in", "error");

        validationError.inner.forEach((error) => {
          switch (error.path) {
            case "username":
              setUsernameError(error.message);
              break;

            case "password":
              setPasswordError(error.message);
              break;
            default:
              break;
          }
        });
      }
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Sign in
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign up and get our newest news.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="username"
                    type="text"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your username"
                  />
                  <p className="text-[#FF0000]">{usernameError}</p>
                </div>
                <div className="flex flex-row items-center w-full  text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                  <input
                    type="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                </div>
                <p className="text-[#FF0000]">{passwordError}</p>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign in
                  </button>
                  <Link
                    to={"/signup"}
                    type="button"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Don't Have an account yet? Sign Up
                  </Link>
                </div>
                <p className="text-[#FF0000] text-center">{error}</p>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
