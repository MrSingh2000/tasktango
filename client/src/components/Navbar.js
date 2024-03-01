import { useEffect, useState} from "react";

import { IoMdCloseCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";



export const Navbar = ()=> {
  const [userProfileClicked,setUserProfileClicked] = useState(false);
  const [showSidebar,setShowSideBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const loc = useLocation();
  const isAuthpg = loc.pathname === '/signin' || loc.pathname ===  '/signup';
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
    if (isMediumScreen&&showSidebar) {
      setShowSideBar(false);
    } 
  }, [isMediumScreen]);
  if(isAuthpg){
    return <></>
  }
  
  return (
    
<div className="h-full ">
    {!showSidebar?<nav class="bg-white dark:bg-gray-800  shadow fixed top-0 w-full z-20">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <a onClick={()=>{navigate('/')}} class="flex-shrink-0" href="/">
                        LOGO
                    </a>
                    <div onClick={()=>{navigate('/dashboard')}} class="hidden md:block">
                        <div class="flex items-baseline ml-10 space-x-4">
                            <a  class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Dashboard
                            </a>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="flex items-baseline ml-10 space-x-4">
                            <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Create+
                            </a>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="flex items-baseline ml-10 space-x-4">
                            <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Tasks
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div class="flex flex-row justify-between items-center">
                    <div class="flex items-center ml-4 md:ml-6">
                        <div class="relative ml-3">
                            <div class="relative inline-block text-left">
                                <div onClick={()=>{setUserProfileClicked(!userProfileClicked)}}>
                                    <button type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                        <svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                {userProfileClicked?<div  class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a  class="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Settings
                                                </span>
                                            </span>
                                        </a>
                                        <a  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    History
                                                </span>
                                            </span>
                                        </a>
                                        <a  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Logout
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>:<></>}
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>{setShowSideBar(true)}} class="flex -mr-2 md:hidden">
                        <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </nav>:
    <div id="sidebar" class="h-full md:hidden  bg-white dark:bg-gray-800  shadow w-full ">
            <div class="px-2 pt-2 pb-3 h-full w-full space-y-1 sm:px-3 flex flex-col items-center justify-between">
                <div><img/>LOGO</div>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    Dashboard
                </a>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    Create+
                </a>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    Tasks
                </a>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    History
                </a>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    Settings
                </a>
                <a class="text-gray-800 hover:text-[#FABB18] dark:hover:text-white block px-10 py-6 rounded-md text-base font-medium " href="/#">
                    Log out
                </a>
                <IoMdCloseCircle onClick={()=>{setShowSideBar(false)}} /> 
                
            </div>
    </div>}

</div>
  )
}
