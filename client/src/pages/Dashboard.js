import { IoIosAddCircleOutline } from "react-icons/io";
import { useState,useEffect } from "react";

export const DashBoard = () =>{
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDate(new Date());
        }, 1000);    
    return () => clearInterval(intervalId);
    }, []);

  
  const formattedDateTime = currentDate.toLocaleString('en-US', {
    day: 'numeric',
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

    return (
        <div className="mt-20 flex flex-col items-center w-full h-full">
            <div className="flex flex-row w-full justify-between h-1/5"><div className="flex flex-col items-center justify-around w-3/12 md:w-2/12"><div className="">TODAY</div><div>{formattedDateTime}</div></div><div className="flex flex-row items-center justify-around w-3/12 h-1/5 md:w-2/12">Add New Task<IoIosAddCircleOutline/></div></div>
        </div>
    );
}