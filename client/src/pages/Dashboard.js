import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaRegFolder } from "react-icons/fa";


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
      <div className="flex flex-row w-full justify-around h-1/5">
        <div className="flex flex-col items-center rounded-md justify-center w-4/12 md:w-2/12">
          <div className="font-semibold">TODAY</div>
          <div className="font-semibold">{formattedDateTime}</div>
        </div>
        <div className="flex flex-row items-center justify-around w-4/12  bg-custom-yellow rounded-md h-1/2  md:w-2/12">
          Add New Task
          <IoIosAddCircleOutline className="text-white h-[30px] w-[30px]"  />
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Tasks Pending
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              number of tasks pending
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Read More
            </button>
          </div>
        </div>
        
        

      </div>
    </div>
  );
}

export default Dashboard;
