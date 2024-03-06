import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import axios from "axios";
import { showToast } from "../helpers/index.js";
import { updateLoading } from "../redux/reducers/loadingSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.js";



export function Modal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: "", desc: "" });
  const user = useSelector((store)=>store.user)
  const loading = useSelector((store)=>store.loading.value)
  const handleChange = (e) => {
    setTask((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  

  const createTask = async () => {
    dispatch(updateLoading(true));
    if(task.title===""){
      showToast("Title is Empty","error")
    }
    else if(task.desc===""){
      showToast("Task Description is Empty","error")
    }
    else{
      
      
      axios({
        url: `${process.env.REACT_APP_HOST}/api/task/create`,
        method: "POST",
        headers: {
          authToken: user.authToken,
        },
        data:task,
      })
        .then((res) => {
          showToast("Task Created Successfully!", "success");
          props.setShowModal(false);
          dispatch(updateLoading(false));
          
          navigate("/");
        })
        .catch((err) => {
          showToast(err.response.data.error.message, "error");
          props.setShowModal(false)
          dispatch(updateLoading(false));
          
        });
    }
  }
  

  return loading ? <Loader/> : (

    <div className="h-100vh w-100vw">

      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-100vh w-100vw bg-transparent backdrop-blur-sm "
          >
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t w-full">
                  <h3 className="text-3xl font-semibold w-full">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form class="max-w-sm mx-auto md:w-full w-4/5">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input name="title" type="text" id="email" onChange={(e) => { handleChange(e) }} aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task" />
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea name="desc" id="message" rows="4" onChange={(e) => { handleChange(e) }} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto" placeholder="About Task..."></textarea>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-custom-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-custom-yellow text-black active:bg-custom-light-yellow font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {createTask()}}
                  >
                    Add New Task
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

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
  if (showModal) {
    return <Modal showModal={showModal} setShowModal={setShowModal} />
  }
  return (
    <div className="flex flex-col items-center w-full h-[calc(100vh-4rem)] bg-gray-100 overflow-auto">
      <div className="flex flex-row w-full justify-between h-1/5 p-4 items-center">
        <div className="flex flex-col items-center rounded-md justify-center h-5/6 w-6/12 md:w-5/12">
          <div className="font-bold">TODAY</div>
          <div className="font-semibold">{formattedDateTime}</div>
        </div>
        <div onClick={() => { setShowModal(true) }} className="flex cursor-pointer flex-row items-center justify-around w-4/12  bg-custom-yellow rounded-md h-5/6 lg:w-1/6  md:w-1/5">
          Add New Task
          <IoIosAddCircleOutline className="text-white h-[30px] w-[30px]" />
        </div>
      </div>
      <div className="flex md:flex-row items-center justify-evenly w-full flex-col">
        <div class="flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  h-full w-72 lg:w-64 md:w-52">
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
        <div class="flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border h-full rounded-xl    w-72 lg:w-64 md:w-52">
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
        <div class="flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border h-full rounded-xl  w-72 lg:w-64 md:w-52">
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
      <div className="flex md:flex-row  justify-evenly p-3 items-center w-full mt-10 flex-col">
        <div
          class="block px-6 py-4 md:w-1/2 w-4/5  text-left font-medium rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                </div>

              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>

                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                </div>

              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>

                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                </div>

              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-1/3">Task</div><div className="w-1/3">DeadLine</div>

                <div class="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="bg-custom-yellow text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                </div>

              </div>
            </li>

          </ul>
        </div>
        <div
          class="block px-6 py-4 md:w-2/5 w-4/5 text-left md:mt-0 mt-4 font-medium  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          DEADLINES THIS WEEK

          <ul class="w-full text-left ">
            <li
              class="w-full border-b-2 font-normal text-left border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-3/5">Task</div><div className="w-2/5">DeadLine</div>
              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-3/5">Name</div><div className="w-2/5">DeadLine</div>
              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-3/5">Name</div><div className="w-2/5">DeadLine</div>
              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-3/5">Name</div><div className="w-2/5">DeadLine</div>
              </div>
            </li>
            <li
              class="w-full border-b-2 font-light border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <div className="w-full flex flex-row items-center justify-evenly"><div className="w-3/5">Name</div><div className="w-2/5">DeadLine</div>
              </div>
            </li>


          </ul>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;

