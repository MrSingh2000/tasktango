import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import Collabs from "../components/Collabs";
import { useSelector } from "react-redux";

function Tasks() {
  const [showmodal, setShowmodal] = useState({
    visible: false,
    data: [],
  });
  const userDetails = useSelector((store) => store.userDetails);

  return showmodal.visible ? (
    <Collabs setShowmodal={setShowmodal} showmodal={showmodal} />
  ) : (
    <div className="h-[calc(100vh-4rem)] dark:bg-gray-700 ">
      {userDetails.tasks.length > 0 || userDetails.collabtasks.length > 0 ? (
        <div className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 overflow-x-hidden p-5  gap-x-5 w-full grid-rows-auto  justify-between overflow-y-auto h-full">
          {/* My tasks */}
          {userDetails.tasks.map((task, index) => {
            return <TaskCard setShowmodal={setShowmodal} task={task} key={index}/>;
          })}

          {/* Colab tasks */}
          {userDetails.collabtasks.map((task, index) => {
            return <TaskCard setShowmodal={setShowmodal} task={task} key={index}/>;
          })}
        </div>
      ) : (
        <div>No tasks for today.</div>
      )}
    </div>
  );
}

export default Tasks;
