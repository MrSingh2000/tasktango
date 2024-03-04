import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { MdHistoryToggleOff } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

function TopNav() {
  const [userProfileClicked, setUserProfileClicked] = useState(false);
  const [showSidebar, setShowSideBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const loc = useLocation();
  const isAuthpg = loc.pathname === "/signin" || loc.pathname === "/signup";
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMediumScreen = windowWidth >= 768;
  useEffect(() => {
    if (isMediumScreen && showSidebar) {
      setShowSideBar(false);
    }
  }, [isMediumScreen]);
  if (isAuthpg) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <nav className="bg-white dark:bg-gray-800  shadow top-0 w-full z-20 h-16 py-4">
          <div className="px-8 mx-auto max-w-7xl flex justify-between w-full items-center">
            <div className="md:flex items-baseline space-x-4 font-semibold text-2xl hidden">
              {location.pathname === "/"
                ? "Dashboard"
                : `${
                    location.pathname.charAt(1).toUpperCase() +
                    location.pathname.substring(2)
                  }`}
            </div>
            <div className="flex flex-row md:justify-between md:w-fit w-full justify-between items-center">
              <div className="flex items-center md:ml-6">
                <div className="flex items-baseline space-x-4">
                  <div class="flex relative flex-row-reverse">
                    <span class="rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <CiSearch size={25} />
                    </span>
                    <input
                      type="text"
                      id="email-with-icon"
                      class=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="relative inline-block text-left">
                    <div
                      onClick={() => {
                        setUserProfileClicked(!userProfileClicked);
                      }}
                    >
                      <button
                        type="button"
                        className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </button>
                    </div>
                    {userProfileClicked ? (
                      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="#"
                            className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Settings</span>
                            </span>
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>History</span>
                            </span>
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Logout</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowSideBar(true);
                }}
                className="flex -mr-2 md:hidden"
              >
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>

      {showSidebar && (
        <div
          id="sidebar"
          className="h-full md:hidden  bg-white dark:bg-gray-800  shadow w-full "
        >
          <div className="px-2 pt-2 pb-3 h-full w-full space-y-1 sm:px-3 flex flex-col items-center justify-between">
            <div>LOGO</div>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              Dashboard
            </a>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              Create+
            </a>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              Tasks
            </a>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              History
            </a>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              Settings
            </a>
            <a
              className="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium "
              href="/#"
            >
              Log out
            </a>
            <IoMdCloseCircle
              onClick={() => {
                setShowSideBar(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SideNav() {
  const navItems = [
    {
      name: "Dashboard",
      url: "/",
      icon: <LuLayoutDashboard size={25} />,
    },
    {
      name: "Tasks",
      url: "/tasks",
      icon: <RiTodoLine size={25} />,
    },
    {
      name: "History",
      url: "/history",
      icon: <MdHistoryToggleOff size={25} />,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: <IoSettingsSharp size={25} />,
    },
  ];

  return (
    <div className="w-full md:w-1/3 lg:w-1/5 md:block hidden h-screen shadow-lg">
      <div className="w-fit m-auto p-10 text-2xl font-bold">
        TaskTang
        <span className="text-custom-yellow text-5xl relative top-1">o</span>
      </div>
      <ul className="flex flex-col gap-2 items-center mt-8">
        {navItems.map((item) => {
          return (
            <NavLink
              to={item.url}
              key={item.name}
              className="w-full flex justify-center"
            >
              {({ isActive, isPending, isTransitioning }) => (
                <li
                  className={`${
                    isActive ? "bg-black text-white" : "text-black"
                  } p-4 flex w-3/4 items-center gap-3 rounded-xl`}
                >
                  <span
                    className={`${
                      isActive ? "text-custom-yellow" : "text-black"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </li>
              )}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

function NavContainer() {
  return (
    // <div>
    <div className="flex">
      <SideNav />
      <TopNav />
    </div>
    // {/* </div> */}
  );
}

export default NavContainer;
