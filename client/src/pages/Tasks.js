import React, { useState } from 'react'
import profileImg from "../assets/profile.png";
import { CiViewList } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";


function Modal(props) {
  return (
    <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-100vh w-100vw bg-transparent backdrop-blur-sm">
      <div className="bg-transparent backdrop-blur-sm z-500 outline-none focus:outline-none w-5/6 md:w-4/5 lg:w-1/2 h-1/2 overflow-y-hidden p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row items-center justify-between mb-4">
          <h5 className="text-xl hover:text-custom-yellow font-bold leading-none text-gray-900 dark:text-white">Members</h5>
          <IoIosClose onClick={() => { props.setShowmodal(false) }} className= 'dark:text-white h-8 w-8 hover:text-custom-yellow' />
        </div>
        <div className="flow-root overflow-hidden">
          <ul role="list" className="grid md:grid-cols-2   grid-cols-1 grid-rows-auto overflow-y-auto  max-h-72"> {/* Adjust max-h-60 to your desired maximum height */}
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full dark:bg-white" src={profileImg} alt="Neil image"/>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}


                    
function Tasks() {
  const [showmodal,setShowmodal] = useState(false);
  const [fade,setFade] = useState("");
  return showmodal? <Modal setShowmodal={setShowmodal}/>: (
    
  <div className='h-[calc(100vh-4rem)] grid dark:bg-gray-700 sm:grid-cols-2 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 overflow-x-hidden p-5  gap-x-5 w-full grid-rows-auto    justify-between `${fade}` '>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>  
            </ul>
      </div>
    </div>
    <div class="w-full  p-4 m-3 bg-white border border-gray-200 max-h-96 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Task Name</h5>
            <img class="w-8 h-8 rounded-full dark:bg-white"  src={profileImg} alt="Michael image"/>
            
      </div>
      <div className='flex flex-row w-full h-2/12 p-2 items-center border-t-2 border-b-2 justify-between'>
          <div className='w-2/5 dark:text-white text-start'>Sub Task</div>
          <div className='w-2/5 dark:text-white text-start'>Deadline</div>
          <div className='w-1/5 dark:text-white text-start'>People</div>
      </div>
      <div class="flex flex-col w-full">
            <ul role="list" class="divide-y w-full divide-gray-200 max-h-64 overflow-y-auto dark:divide-gray-700">
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
                        </div>
                    </div>
                </li>
                <li  class="py-3 h-1/5 dark:text-white sm:py-4">
                    <div class=" h-full flex items-start">
                        
                        <div class="flex-1 h-full min-w-0 w-2/5 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <div className='flex  flex-row items-center justify-between'>
                              <div class="w-2/5 h-2 mt-0.5 dark:bg-white  bg-gray-200 rounded-full ">
                                <div  class=" h-full bg-custom-yellow text-blue-100 text-center text-sm leading-none rounded-full" style={{ width: "45%" }}></div>
                              </div>
                              <div className='text-sm dark:text-white px-2 w-3/5'>25%</div>
                            </div>
                            
                            
                        </div>
                        <div className='w-2/5 h-full'>DeadLine</div>
                        <div class="flex-shrink-0 h-full w-1/5">
                          <CiViewList onClick={()=>{setShowmodal(true);setFade("hover:animate-pulse")}}  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 h-8 w-8" />
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