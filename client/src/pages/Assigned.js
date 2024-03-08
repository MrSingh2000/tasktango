import TaskCard from "../components/TaskCard";
import Collabs from "../components/Collabs";
import profileImg from "../assets/profile.png"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserById, showToast } from "../helpers";
import axios from "axios";
import { updateLoading } from "../redux/reducers/loadingSlice";
function Assigned (){
    const dispatch = useDispatch();
    const userDetails = useSelector((store) => store.userDetails);
    const user = useSelector((store)=>store.user);
    const [tasks,setTasks] = useState([]);

    const statusToCompleted = async(subId) =>{
        
        const data = {
            "updateType": "status",
            "status": true,
            "taskId": subId,   
        }

        try {
            await axios({
            method: "put",
            url:`${process.env.REACT_APP_HOST}/api/sub-task/create`,
            headers: {
              authToken: user.authToken,
              "Content-Type": "multipart/form-data",
            },
            data
          })}
        catch(error){
            showToast(error.message,"error")
        }
    }


    useEffect(()=>{
            console.log(userDetails.collabtasks)
            const getData = async () => {
                let templist = [];
                await Promise.all(
                    
                    userDetails.collabtasks.map(async (task) => {
                        const owner = await getUserById(task.owner, user.authToken);
                        templist.push({ task: task, ownerName: owner?.name, ownerImg: owner?.img });
                    }),
                    
                );
                setTasks(templist);
                console.log(templist); 
            };
            getData();
            
    }, []);
    
    
    
    return (
        <div className=" w-100vw h-[calc(100vh-4rem)]">
            <div className="w-5/6 ml-auto mr-auto max-h-[calc(100vh-4rem)] overflow-y-scroll  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            

                <div className="flow-root divide-y divide-gray-200 dark:divide-gray-100">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Task
                                        </p>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Deadline
                                        </p>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Status
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Owner
                                    </div>
                                    
                                    
                                </div>
                        </div>
                    </div>
                </div>
                {userDetails.collabtasks.length > 0 ? (
                <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-100">
                            
                            {tasks.map((taskDetails,index) => {
                                console.log(taskDetails.task._id)
                                
                                
                                return <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center">
                                        
                                        
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {taskDetails.task.title}
                                            </p>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {taskDetails.task.deadline}
                                            </p>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p  className={`"text-sm ${taskDetails.task.status? 'text-green-300':'text-red-600'} font-medium truncate"`}>
                                                {taskDetails.task.status?"Completed":"Pending"}
                                            </p>
                                            <button type="button" onClick={()=>{statusToCompleted(taskDetails.task._id)}} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-1 py-.5 dark:text-black me-2 mb-2 dark:focus:ring-yellow-900">Mark As Done</button>

                                        </div>
                                        <div className="flex flex-row max-w-1/3">
                                            <div className="flex-shrink-0 mr-2">
                                                <img src= {taskDetails?.ownerImg} className=" size-6 dark:bg-white rounded-full"  alt="Neil image"/>
                                            </div>
                                            <div className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white">
                                                {taskDetails?.ownerName}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>;
                            })}
                             
                            
                        </ul>
                </div>)
                :<div>No tasks Assigned Yet</div>}
            </div>
        </div>

    )
}
export default Assigned