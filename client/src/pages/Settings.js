import React, { useEffect, useRef } from "react";
import profileImg from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { updateDarkMode } from "../redux/reducers/darkmodeSlice";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import { useUploadFile } from "../helpers";
import { FaPencil } from "react-icons/fa6";

function Settings() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const darkmode = useSelector((store) => store.darkmode.value);

  const handleToggle = () => {
    dispatch(updateDarkMode(!darkmode));
  };

  const [uploadFile] = useUploadFile();
  const inputRef = useRef(null);
  const handlePic = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("class", `${darkmode ? "dark" : "light"}`);
  }, [darkmode]);

  return (
    <div className="w-full h-[calc(100vh-4rem)] container flex flex-col items-center p-4 dark:bg-gray-800">
      <div className="flex ml-2">
        <img
          src={user.img || profileImg}
          alt="profile"
          className="w-20 rounded-full shadow-lg hover:scale-125 transition-all bg-white"
        />
        <input
          onChange={(e) => {
            uploadFile(e.target.files[0], "pic");
          }}
          ref={inputRef}
          type="file"
          className="hidden"
        />
        <FaPencil onClick={handlePic} size={30} className="shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer p-2 rounded-xl ml-2"/>
      </div>
      <div className="shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 p-4 mt-2 custom-font dark:bg-gray-950 dark:text-white text-black">
        <p className="text-xl font-semibold text-center mb-4">
          {user.username}
        </p>
        <p className="flex justify-between">
          <span>Name:</span>
          <span>{user.name}</span>
        </p>
        <p className="flex justify-between">
          <span>Email:</span>
          <span>{user.email}</span>
        </p>
        <div className="flex flex-col items-center mt-16">
          <p className="font-semibold text-sm mb-2">Dark Mode</p>
          <div className="flex gap-4 items-center relative right-5">
            <img
              src={sun}
              alt="sun"
              className={`${darkmode ? "hidden" : "block"} w-8`}
            />
            <img
              src={moon}
              alt="moon"
              className={`${darkmode ? "block" : "hidden"} w-8`}
            />
            <div class="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="Blue"
                class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={darkmode}
                onChange={handleToggle}
              />
              <label
                for="Blue"
                class="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
