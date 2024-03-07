import React from 'react'
import profileImg from "../assets/profile.png";
import { IoIosClose } from "react-icons/io";

function Collabs(props) {
    return (
      <div className="justify-center dark:bg-gray-700 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-100vh w-100vw bg-transparent backdrop-blur-sm">
        <div className="bg-transparent backdrop-blur-sm z-500 outline-none focus:outline-none w-5/6 md:w-4/5 lg:w-1/2 h-1/2 overflow-y-hidden p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-row items-center justify-between mb-4">
            <h5 className="text-xl hover:text-custom-yellow font-bold leading-none text-gray-900 dark:text-white">
              Members
            </h5>
            <IoIosClose
              onClick={() => {
                props.setShowmodal(false);
              }}
              className="dark:text-white h-8 w-8 hover:text-custom-yellow"
            />
          </div>
          <div className="flow-root overflow-hidden">
            <ul
              className="grid md:grid-cols-2   grid-cols-1 grid-rows-auto overflow-y-auto  max-h-72"
            >
              {" "}
              {/* Adjust max-h-60 to your desired maximum height */}
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full dark:bg-white"
                      src={profileImg}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
export default Collabs