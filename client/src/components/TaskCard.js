import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { CiViewList } from "react-icons/ci";
import { useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { calculateTaskProgress, getUserById, showToast } from "../helpers";
import Addtask from "./Addtask";

function TaskCard(props) {
  const { setShowmodal, task } = props;
  const user = useSelector((store) => store.user);
  const [taskOwner, setTaskOwner] = useState(null);
  const [progress, setProgress] = useState(0);
  const [addSubtask, setAddSubtask] = useState(false);

  useEffect(() => {
    const getOwner = async () => {
      try {
        const response = await getUserById(task.owner, user.authToken);
        setTaskOwner(response);
      } catch (error) {
        showToast("Some error occurred. Please refresh the page.", "error");
      }
    };

    const taskProgress = calculateTaskProgress(task);
    setProgress(taskProgress);

    getOwner();
  }, []);

  return addSubtask ? (
    <Addtask
      showModal={addSubtask}
      setShowModal={setAddSubtask}
      subtask={true}
      task={task}
    />
  ) : (
    <div className="w-full p-4 m-3 bg-white border border-gray-200 h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex items-center justify-between mb-4">
        <div className="relative inline-block">
          <div class="w-full bg-gray-200 rounded-full">
            <div
              class="bg-green-500 rounded-full text-xs leading-none text-center text-white"
              style={{ width: `${progress > 10 ? `${progress}%` : "10%"}` }}
            >
              {progress}%
            </div>
          </div>

          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {task.title}
          </h5>
          <div className="max-h-4rem overflow-y-auto bg-gray-200 rounded-lg p-2 my-2 mr-2">
            {task.desc}
          </div>
          <IoMdAddCircle
            onClick={() => setAddSubtask(true)}
            size={25}
            className="text-green-500 shadow cursor-pointer"
          />
        </div>
        <img
          className="w-8 h-8 rounded-full dark:bg-white"
          src={taskOwner?.img || profileImg}
          alt="profile"
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
              return (
                <li key={index} className="py-3 h-1/5 dark:text-white sm:py-4">
                  <div className=" h-full flex items-start">
                    <div className="flex-1 h-full min-w-0 w-2/5 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {sub.title}
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
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-center mt-2 font-semibold text-xs italic">
            No subtasks available.
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;