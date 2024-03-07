import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { CiViewList } from "react-icons/ci";
import { useSelector } from "react-redux";

function TaskCard(props) {
  const { setShowmodal, task } = props;
  const user = useSelector((store) => store.user);
  const [taskOwner, setTaskOwner] = useState(null);

  useEffect(() => {
    const getOwner = async () => {
        
    }

  }, [])
  

  return (
    <div className="w-full p-4 m-3 bg-white border border-gray-200 h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Task Name
        </h5>
        <img
          className="w-8 h-8 rounded-full dark:bg-white"
          src={profileImg}
          alt="Michael image"
        />
      </div>
      <div className="flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between">
        <div className="w-2/5 dark:text-white text-start">Sub Task</div>
        <div className="w-2/5 dark:text-white text-start">Deadline</div>
        <div className="w-1/5 dark:text-white text-start">People</div>
      </div>
      <div className="flex flex-col w-full">
        {task.subTask.length > 0 ? (
          <ul className="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
            {task.subTask.map((sub, index) => {
              return (<li key={index} className="py-3 h-1/5 dark:text-white sm:py-4">
                <div className=" h-full flex items-start">
                  <div className="flex-1 h-full min-w-0 w-2/5 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <div className="flex  flex-row items-center justify-between">
                      <div className="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                        <div
                          className=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <div className="text-sm dark:text-white px-2 w-3/5">
                        25%
                      </div>
                    </div>
                  </div>
                  <div className="w-2/5 h-full">DeadLine</div>
                  <div className="flex-shrink-0 h-full w-1/5">
                    <CiViewList
                      onClick={() => {
                        setShowmodal(true);
                      }}
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8"
                    />
                  </div>
                </div>
              </li>);
            })}
          </ul>
        ) : (
            <div className="text-center mt-24">
                No subtasks available.
            </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
