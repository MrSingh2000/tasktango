
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserById, showToast, useUpdate } from "../helpers";
import axios from "axios";
import { updateLoading } from "../redux/reducers/loadingSlice";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

function Assigned() {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.userDetails);
  const user = useSelector((store) => store.user);
  const [tasks, setTasks] = useState([]);
  const [getUserNtasksUpdate] = useUpdate();

  const statusToCompleted = async (subId, val) => {
    const data = {
      updateType: "status",
      status: val,
      taskId: subId,
    };

    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_HOST}/api/sub-task/create`,
        headers: {
          authToken: user.authToken,
        },
        data,
      });
      getUserNtasksUpdate();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  useEffect(() => {
    console.log(userDetails.collabtasks);
    dispatch(updateLoading(true))
    const getData = async () => {
      
      let templist = [];
      await Promise.all(
        
        userDetails.collabtasks.map(async (task) => {
          
          const owner = await getUserById(task.owner, user.authToken);
          console.log("Owner: ", owner);
          templist.push({
            task: task,
            ownerName: owner?.name,
            ownerEmail: owner?.email,
            ownerImg: owner?.img,
          });
        })
      );
      
      setTasks(templist);
      console.log(templist);
    };
    getData();
    dispatch(updateLoading(false));
  }, []);

  return tasks.length ? (
    

    <div class="ml-2 mr-2 overflow-x-auto w-100vw h-[calc(100vh-4rem)] mt-5 shadow-md sm:rounded-lg">
        
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                    
                     <th scope="col" class="dark:text-white px-6 py-3">
                         Task
                    </th>
                     <th scope="col" class="px-6 py-3 dark:text-white">
                         Status
                     </th>
                     <th scope="col" class="px-6 py-3 dark:text-white">
                         Deadline
                     </th>
                     <th scope="col" class="px-6 py-3 dark:text-white">
                         Owner
                     </th>
                 </tr>
             </thead>
             <tbody>
             {tasks.map((taskDetails, index) => {
                console.log(taskDetails)
                 return (<tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                     
                     <td class="dark:text-white text-lg font-semibold text-slate-800 px-6 py-4">
                         {taskDetails.task.title}
                     </td>
                     <td class="px-6 py-4">
                         <div class="flex items-start flex-col">
                             
                             <p
                           className={`text-sm ${
                             taskDetails.task.status
                               ? "text-green-300"
                               : "text-red-600"
                           } font-semibold truncate mb-1`}
                         >
                           {taskDetails.task.status ? "Done " : "Pending "}
                         </p>
                         <div className="flex flex-row">
                          <button
                            type="button"
                            disabled={taskDetails.task.status}
                            onClick={() => {
                              statusToCompleted(taskDetails.task._id, true);
                            }}
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-1 py-1 dark:text-black me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            <IoMdDoneAll size={25} />
                          </button>
                          <button
                            type="button"
                            disabled={!taskDetails.task.status}
                            onClick={() => {
                              statusToCompleted(taskDetails.task._id, false);
                            }}
                            className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 dark:text-black me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            <MdOutlineCancel size={25} />
                          </button>
                          </div>
                         </div>
                     </td>
                     <td class="px-6 py-4">
                         <p  class="font-medium text-blue-600 dark:text-blue-500">{taskDetails.task.deadline}</p>
                     </td>
                     <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                         <img class="w-10 h-10 rounded-full" src={taskDetails.ownerImg} alt="Jese image"/>
                         <div class="ps-3">
                             <div class="text-base font-semibold">{taskDetails.ownerName}</div>
                             <div class="dark:text-white font-normal text-gray-500">{taskDetails.ownerEmail}</div>
                         </div>  
                     </th>
                 </tr>)
             })}
             </tbody>
        </table>
     </div>

  ): (
    <tr>
      <div class="h-12 rounded-md w-full mx-4">
        <div class="flex flex-row items-center justify-center h-full space-x-5 animate-pulse w-full">
          <div class="flex flex-col space-y-3 w-full">
            <div class="h-6 w-full bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </tr>
  )
}
export default Assigned;
