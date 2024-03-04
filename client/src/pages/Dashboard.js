import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";



function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div className="py-10 flex flex-col items-center w-full h-full bg-gray-100">
      <div className="flex flex-row w-full justify-between h-1/5 p-4 items-center">
        <div className="flex flex-col items-center rounded-md justify-center h-5/6 w-4/12 md:w-3/12">
          <div className="font-bold">TODAY</div>
          <div className="font-semibold">{formattedDateTime}</div>
        </div>
        <div className="flex flex-row items-center justify-around w-4/12  bg-custom-yellow rounded-md h-5/6  md:w-2/12">
          Add New Task
          <IoIosAddCircleOutline className="text-white h-[30px] w-[30px]"  />
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly w-full">
        <div class="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
          <div class="px-4 py-3">
              <h4 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              TOTAL PENDING
              </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p class="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                12
              </p>
              <MdOutlinePendingActions className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>          
        </div>
        <div class="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
          <div class="px-4 py-3">
              <h4 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              DEADLINES THIS WEEK
              </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p class="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                12
              </p>
              <IoTimerOutline className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>          
        </div>
        <div class="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
          <div class="px-4 py-3">
              <h4 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full">
              PROJECTS WORKED
              </h4>
            <div className="mt-6 flex flex-row justify-between items-center">
              <p class="block font-sans text-2xl antialiased font-medium leading-relaxed text-inherit">
                12
              </p>
              <FaRegFolder className="text-custom-yellow h-12 w-12 bg-custom-light-yellow px-2 rounded-lg" />
            </div>
          </div>          
        </div>
      </div>
      <div className="flex flex-row justify-between p-3 items-center w-full mt-10">
        <div
          class="block px-6 py-4 w-1/2 text-left font-medium  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          RECENT ACTIVITY  
            
          <ul class="w-full text-left ">
            <li
              class="w-full border-b-2 font-normal text-left border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div><div className="w-1/3">Progress</div>
              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>
                
                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                </div>

              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>
                
                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                </div>

              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>
                
                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                </div>

              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
