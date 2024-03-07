import TaskCard from "../components/TaskCard";
import Collabs from "../components/Collabs";
import profileImg from "../assets/profile.png"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserById } from "../helpers";
import { updateLoading } from "../redux/reducers/loadingSlice";
function Assigned (){
    const dispatch = useDispatch();
    const userDetails = useSelector((store) => store.userDetails);
    const user = useSelector((store)=>store.user);
    const [taskowner,setTaskowner] = useState(null);
    const setowner = async(task)=>{
        
        const name = await getUserById(task.owner,user.authToken);
        
        setTaskowner(name);
        
    }
    
    
    return (
        <div className=" w-100vw h-[calc(100vh-4rem)]">
            <div class="w-5/6 ml-auto mr-auto max-h-[calc(100vh-4rem)] overflow-y-scroll  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            

                <div className="flow-root divide-y divide-gray-200 dark:divide-gray-100">
                    <div class="divide-y divide-gray-200 dark:divide-gray-700">
                        <div class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Task
                                        </p>
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Deadline
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Owner
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                {userDetails.tasks.length > 0 || userDetails.collabtasks.length > 0 ? (
                <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-100">
                            
                            {userDetails.tasks.map((task, index) => {
                                
                                setowner(task);
                                
                                return <li class="py-3 sm:py-4" key={index}>
                                    <div class="flex items-center">
                                        
                                        
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {task.title}
                                            </p>
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {task.deadline}
                                            </p>
                                        </div>
                                        <div className="flex flex-row max-w-1/3">
                                            <div class="flex-shrink-0 mr-2">
                                                <img src= {taskowner?.img?taskowner?.img:profileImg} class="w-6 h-6 dark:bg-white rounded-full"  alt="Neil image"/>
                                            </div>
                                            <div class="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white">
                                                {taskowner?.name}
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