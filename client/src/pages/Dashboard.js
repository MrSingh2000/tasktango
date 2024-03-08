import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import {
  calculateDeadlines,
  doneTasks,
  pendingTasks,
  recentActivity,
} from "../helpers/index.js";
import { useSelector } from "react-redux";
import Addtask from "../components/Addtask.js";
import profile from "../assets/profile.png";

function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const userDetails = useSelector((store) => store.userDetails);
  const [stats, setStats] = useState({
    pendingTasks: [],
    doneTasks: [],
    deadlines: [],
    recent: [],
  });

  useEffect(() => {
    const pTasks = pendingTasks(userDetails.tasks, userDetails.collabtasks);
    const dTasks = doneTasks(userDetails.tasks, userDetails.collabtasks);
    const dLines = calculateDeadlines(
      userDetails.tasks,
      userDetails.collabtasks
    );
    const rActivity = recentActivity(
      userDetails.tasks,
      userDetails.collabtasks
    );

    setStats({
      pendingTasks: [...pTasks],
      doneTasks: [...dTasks],
      deadlines: [...dLines],
      recent: [...rActivity],
    });
  }, [userDetails]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDate.toLocaleString("en-US", {
    day: "numeric",
    weekday: "short",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return showModal ? (
    <Addtask showModal={showModal} setShowModal={setShowModal} subtask={false}/>
  ) : (
    <div className="flex flex-col items-center w-full h-[calc(100vh-4rem)] bgoverflow-auto">
      <div className="flex flex-row w-full justify-between h-1/5 p-4 items-center">
        <div className="flex flex-col items-start rounded-md justify-start h-5/6 w-6/12 md:w-5/12">
          <div className="font-bold text-2xl">TODAY</div>
          <div className="font-semibold">{formattedDateTime}</div>
        </div>
        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="flex cursor-pointer flex-row items-center justify-around w-4/12  bg-custom-yellow text-white rounded-md h-5/6 lg:w-1/6  md:w-1/5"
        >
          Add New Task
          <IoIosAddCircleOutline className="text-white h-[30px] w-[30px]" />
        </div>
      </div>
      <div className="flex md:flex-row items-center justify-evenly w-full flex-col">
        <div className="flex flex-col mt-3 text-gray-700 bg-white dark:bg-neutral-700 dark:text-white shadow-md bg-clip-border rounded-xl  h-full w-72 lg:w-64 md:w-52">
          <div className="px-4 py-3">
            <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              TOTAL PENDING
            </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                {stats.pendingTasks.length}
              </p>
              <MdOutlinePendingActions className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 text-gray-700 bg-white dark:bg-neutral-700 dark:text-white shadow-md bg-clip-border h-full rounded-xl    w-72 lg:w-64 md:w-52">
          <div className="px-4 py-3">
            <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              DEADLINES THIS WEEK
            </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                {stats.deadlines.length}
              </p>
              <IoTimerOutline className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 text-gray-700 bg-white dark:bg-neutral-700 dark:text-white shadow-md bg-clip-border h-full rounded-xl  w-72 lg:w-64 md:w-52">
          <div className="px-4 py-3">
            <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              TOTAL PROJECTS
            </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                {userDetails.tasks.length + userDetails.collabtasks.length}
              </p>
              <FaRegFolder className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row  justify-evenly p-3 items-center w-full flex-col mt-4">
        <div className="block bg-white px-6 py-4 md:w-1/2 w-4/5 text-left font-medium rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          RECENT ACTIVITY
          <ul className="w-full text-left">
            <li className="w-full border-b-2 font-normal text-left border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly">
                <div className="w-1/3 font-semibold">Task</div>
                <div className="w-1/3 font-semibold">DeadLine</div>
                <div className="w-1/3 font-semibold">Status</div>
              </div>
            </li>
          </ul>
          <ul className="w-full text-left h-72 overflow-y-auto">
            {stats.recent.length > 0 ? stats.recent.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                >
                  <div className="w-full flex flex-row items-center justify-evenly">
                    <div className="w-1/3">{item.title}</div>
                    <div className="w-1/3">{item.deadline}</div>

                    <div className={`w-1/3 font-semibold ${item.status ? "text-green-400" : "text-red-400"}`}>
                      {item.status ? "Done" : "Pending"}
                    </div>
                  </div>
                </li>
              );
            }) : (
              <>
              <div className="text-center p-12 text-custom-yellow text-sm">
                No recent activity so far.
              </div>
              </>
            )}
          </ul>
        </div>
        <div className="block px-6 py-2 md:w-2/5 w-4/5 text-left md:mt-0 font-medium  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          DEADLINES THIS WEEK
          <ul className="w-full text-left ">
            <li className="w-full border-b-2 font-normal text-left border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly">
                <div className="w-3/5 font-semibold">Task</div>
                <div className="w-2/5 font-semibold">DeadLine</div>
              </div>
            </li>
          </ul>
          <ul className="w-full text-left h-72 overflow-y-auto">
            {stats.deadlines.length > 0 ? stats.deadlines.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                >
                  <div className="w-full flex flex-row items-center justify-evenly">
                    <div className="w-3/5">{item.title}</div>
                    <div className="w-2/5">{item.deadline}</div>
                  </div>
                </li>
              );
            }) : (
              <>
              <div className="text-center p-12 text-custom-yellow text-sm">
                Great! All caught up.
              </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
