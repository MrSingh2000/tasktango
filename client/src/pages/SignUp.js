import { showToast } from "../helpers/index.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateLoading } from "../redux/reducers/loadingSlice.js";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const userSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "*Too short")
      .max(18, "*Too long")
      .required("*Please enter a username"),
    name: yup.string().required("*Please enter your name"),
    email: yup.string().email("*Email Invalid").required("*Email is required"),
    password: yup
      .string()
      .min(8, "*Too short")
      .max(20, "*Too long")
      .required("*Enter a password"),
  });

  const handleRegister = async () => {
    dispatch(updateLoading(true));
    setNameError("");
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    const isValid = await userSchema.isValid(data);
    console.log(process.env.REACT_APP_HOST);
    if (isValid) {
      await axios
        .post(`${process.env.REACT_APP_HOST}/api/auth/register`, data)
        .then((res) => {
          showToast("Signed Up Successfully!", "success");
          dispatch(updateLoading(false));
          navigate("/signin");
        })
        .catch((err) => {
          showToast(err.response.data.error.message, "error");
          dispatch(updateLoading(false));
        });
    } else {
      try {
        userSchema.validateSync(data, { abortEarly: false });
      } catch (validationError) {
        showToast("Could not complete Sign up", "error");
        validationError.inner.forEach((error) => {
          switch (error.path) {
            case "name":
              setNameError(error.message);
              break;
            case "username":
              setUsernameError(error.message);
              break;
            case "email":
              setEmailError(error.message);
              break;
            case "password":
              setPasswordError(error.message);
              break;
            default:
              break;
          }
          dispatch(updateLoading(false));
        });
      }
    }
  };

  return (
    <section className="z-9 overflow-hidden">
      <div class="px-4 py-12 mx-auto h-3/4 max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div class="w-full px-6 py-3">
              <div>
                <div class="mt-3 text-left sm:mt-5">
                  <div class="inline-flex items-center w-full">
                    <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Sign up
                    </h3>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    <p>Sign up and get our newest news.</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 space-y-2">
                <div>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="email"
                    type="email"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                  />
                  <p className="text-[#FF0000]">{emailError}</p>
                </div>
                <div>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="username"
                    type="text"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your username"
                  />
                  <p className="text-[#FF0000]">{usernameError}</p>
                </div>
                <div>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="name"
                    type="text"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your name"
                  />
                  <p className="text-[#FF0000]">{nameError}</p>
                </div>
                <div className="flex flex-row items-center w-full  text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="password"
                    name="password"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                </div>
                <p className="text-[#FF0000]">{passwordError}</p>
                <div class="flex flex-col mt-4 lg:space-y-2">
                  <button
                    onClick={handleRegister}
                    type="button"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign up
                  </button>
                  <Link
                    to={"/signin"}
                    type="button"
                    class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Already Have an account? Sign In{" "}
                  </Link>
                </div>
                <p className="text-[#FF0000] text-center h-5">{error}</p>
              </div>
            </div>
            <div class="order-first hidden w-full lg:block">
              <img
                class="object-cover h-full bg-cover rounded-l-lg"
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
