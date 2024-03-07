import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoading } from "../redux/reducers/loadingSlice";
import { showToast, useUpdate } from "../helpers";
import axios from "axios";

function Addtask(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getUserNtasksUpdate] = useUpdate();

  const [task, setTask] = useState({ title: "", desc: "", deadline: "" });
  const user = useSelector((store) => store.user);
  const handleChange = (e) => {
    setTask((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //   minimum deadline date
  let today = new Date();
  let minDeadline = new Date(today.getDate() + 1);
  minDeadline = minDeadline.toISOString().split("T")[0];

  const isDeadlineValid = () => {
    if (!task.deadline) return false;
    const today = new Date();
    const targetDate = new Date(task.deadline);
    if (targetDate > today) return false;
    return true;
  };

  const createTask = async () => {
    dispatch(updateLoading(true));
    if (task.title === "") {
      showToast("Title is Empty", "error");
    } else if (task.desc === "") {
      showToast("Task Description is Empty", "error");
    } else if (!props.subtask & !isDeadlineValid) {
      showToast("Deadline must be in future.", "error");
    } else {
      if (!props.subtask)
        axios({
          url: `${process.env.REACT_APP_HOST}/api/task/create`,
          method: "POST",
          headers: {
            authToken: user.authToken,
          },
          data: task,
        })
          .then((res) => {
            showToast("Task Created Successfully!", "success");
            props.setShowModal(false);
            getUserNtasksUpdate();
            navigate("/");
          })
          .catch((err) => {
            showToast(err.response.data.error.message, "error");
            props.setShowModal(false);
            dispatch(updateLoading(false));
          });
      else
        axios({
          url: `${process.env.REACT_APP_HOST}/api/sub-task/create`,
          method: "POST",
          headers: {
            authToken: user.authToken,
          },
          data: {
            title: task.title,
            desc: task.desc,
            taskId: props.task._id,
          },
        })
          .then((res) => {
            showToast("Task Created Successfully!", "success");
            props.setShowModal(false);
            getUserNtasksUpdate();
          })
          .catch((err) => {
            showToast(err.response.data.error.message, "error");
            props.setShowModal(false);
            dispatch(updateLoading(false));
          });
    }
  };

  return (
    <div className="h-100vh w-100vw">
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-100vh w-100vw backdrop-blur-sm ">
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white dark:bg-neutral-700">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t w-full">
                  <h3 className="text-3xl font-semibold w-full">{` ${
                    props.subtask ? `${props.task.title}'s Subtask` : "Add Task"
                  }`}</h3>
                </div>
                {/*body*/}
                <form className="max-w-sm mx-auto md:w-full w-4/5 p-3">
                  <label
                    for="message"
                    className="flex justify-between my-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    <span>Title</span>
                    <span>{today.toLocaleDateString()}</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    id="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Task"
                  />
                  <label
                    for="message"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="message"
                    rows="4"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto"
                    placeholder="About Task..."
                  ></textarea>
                  {/* deadline */}
                  {!props.subtask && (
                    <>
                      <label
                        for="date"
                        className="block text-sm font-medium text-gray-700 my-2"
                      >
                        Select a Deadline:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="deadline"
                        min={minDeadline}
                        onChange={(e) => handleChange(e)}
                        className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </>
                  )}
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
                    className="bg-custom-yellow text-white active:bg-custom-light-yellow font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      createTask();
                    }}
                  >
                    {`Add New ${props.subtask ? "Subtask" : "Task"}`}
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

export default Addtask;
