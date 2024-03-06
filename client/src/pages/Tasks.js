import React from 'react'
import profileImg from "../assets/profile.png";
import { CiViewList } from "react-icons/ci";

function Modal(){

}

function Tasks() {
  return (
    
  <div className='h-full flex flex-row  justify-between  '>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700  md:h-2/3">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full" src={profileImg} alt="Michael image"/>
            
        </div>
        <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'><div className='w-2/5 text-start'>Sub Task</div><div className='w-2/5 text-start'>Deadline</div><div className='w-1/5 text-start'>People</div></div>
      <div class="flex flex-col">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li  class="py-3 h-1/5 sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5  bg-gray-200 rounded-full   dark:bg-gray-700">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5  bg-gray-200 rounded-full   dark:bg-gray-700">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5  bg-gray-200 rounded-full   dark:bg-gray-700">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                
            </ul>
      </div>
    </div>
    
  </div>
  )
}

export default Tasks