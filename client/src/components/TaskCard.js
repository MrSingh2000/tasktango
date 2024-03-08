import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { CiViewList } from "react-icons/ci";
import { useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import {
  calculateTaskProgress,
  deleteParentTask,
  getUserById,
  showToast,
  useUpdate,
} from "../helpers";
import Addtask from "./Addtask";
import { MdDeleteForever } from "react-icons/md";

function TaskCard(props) {
  const { setShowmodal, task } = props;
  const user = useSelector((store) => store.user);
  const [taskOwner, setTaskOwner] = useState(null);
  const [progress, setProgress] = useState(0);
  const [addSubtask, setAddSubtask] = useState(false);

  const [getUserNtasksUpdate] = useUpdate();

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

    // getOwner();
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
        <div className="relative inline-block w-full">
          <div className="flex justify-between items-center w-full gap-3">
            <div class="w-full bg-gray-200 rounded-full">
              <div
                class="bg-green-500 rounded-full text-xs leading-none text-center text-white"
                style={{ width: `${progress > 10 ? `${progress}%` : "10%"}` }}
              >
                {progress}%
              </div>
            </div>
            <MdDeleteForever
              onClick={() => {
                deleteParentTask(task._id, user.authToken);
                getUserNtasksUpdate();
              }}
              size={35}
              className="text-red-400 cursor-pointer hover:text-white hover:bg-red-400 p-1 rounded-full left-10 bottom-4 relative"
            />
          </div>

          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {task.title}
          </h5>
          <div className="max-h-[4rem] overflow-y-auto max-w-full bg-gray-200 rounded-lg p-2 my-2 mr-2">
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
          src={user.img || profileImg}
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
                    <div className="flex-1 h-full min-w-0 w-2/5">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {sub.title}
                      </p>
                    </div>
                    <div className="w-2/5 h-full">{sub.deadline}</div>
                    <div className="flex-shrink-0 h-full w-1/5 cursor-pointer">
                      <CiViewList
                        onClick={() => {
                          console.log("sub: ", sub);
                          setShowmodal({
                            visible: true,
                            data: sub,
                            parent: task._id,
                          });
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
