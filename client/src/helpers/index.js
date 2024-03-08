import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateLoading } from "../redux/reducers/loadingSlice";
import axios from "axios";
import { updateUserState } from "../redux/reducers/userSlice";
import { updateUserDetails } from "../redux/reducers/userDetailsSlice";

export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;

    case "error":
      toast.error(message);
      break;

    default:
      toast(message);
      break;
  }
};

export const updateLocalStorage = (data) => {
  localStorage.setItem("tasktango", JSON.stringify(data));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasktango"));
};

export const clearLocalStorage = () => {
  localStorage.removeItem("tasktango");
};

// custom react hook
export function useUploadFile(props) {
  let dispatch = useDispatch();
  let authToken = useSelector((store) => store.user.authToken);

  const uploadFile = (file, type) => {
    dispatch(updateLoading(true));
    let data = new FormData();
    let url;

    data.append("img", file);
    url = `${process.env.REACT_APP_HOST}/api/profile/update`;

    axios({
      method: "post",
      url,
      headers: {
        authToken: authToken,
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        showToast("Update profile picture.", "success");
        dispatch(updateUserState(res.data.data.profile));
        dispatch(updateLoading(false));
      })
      .catch((err) => {
        showToast(err.response.data.error.message, "error");
        dispatch(updateLoading(false));
      });
  };

  return [uploadFile];
}

export const pendingTasks = (myTasks, collabTasks) => {
  const pendingMyTasks = myTasks.filter((task) => task.status === false);
  const pendingCollabTasks = collabTasks.filter(
    (task) => task.status === false
  );

  return [...pendingMyTasks, ...pendingCollabTasks];
};

export const doneTasks = (myTasks, collabTasks) => {
  const doneMyTasks = myTasks.filter((task) => task.status === true);
  const doneCollabTasks = collabTasks.filter((task) => task.status === true);

  return [...doneMyTasks, ...doneCollabTasks];
};

export const calculateDeadlines = (myTasks, collabTasks) => {
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  const filterTasksWithinWeek = (tasks) => {
    return tasks.filter((task) => {
      const deadlineDate = new Date(task.deadline);
      return deadlineDate <= oneWeekFromNow;
    });
  };

  const deadlineMyTasks = filterTasksWithinWeek(myTasks);
  const deadlineCollabTasks = filterTasksWithinWeek(collabTasks);

  return [...deadlineMyTasks, ...deadlineCollabTasks];
};

export const recentActivity = (myTasks, collabTasks) => {
  const today = new Date();
  const twoDayFromNow = new Date(today);
  twoDayFromNow.setDate(twoDayFromNow.getDate() + 2);

  return [
    ...myTasks.filter((task) => task.created < twoDayFromNow),
    ...collabTasks.filter((task) => task.created < twoDayFromNow),
  ];
};

export const getUser = (search, authToken) => {
  if (!authToken || !search) return;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_HOST}/api/profile/search?q=${search}`,
        headers: {
          authToken: authToken,
        },
      });

      resolve(response.data.data.results);
    } catch (error) {
      reject(error.response.data.error.message);
    }
  });
};

export const getUserById = (userId, authToken) => {
  if (!authToken || !userId) return;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_HOST}/api/profile/find?id=${userId}`,
        headers: {
          authToken: authToken,
        },
      });

      resolve(response.data.data.user);
    } catch (error) {
      reject(error.response.data.error.message);
    }
  });
};

export const getMultipleUsersById = (userIds, authToken) => {
  if (!authToken || userIds.length <= 0) return;
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_HOST}/api/collab/all`,
        headers: {
          authToken: authToken,
        },
        data: { users: userIds },
      });

      resolve(response.data.data.users);
    } catch (error) {
      reject(error.response.data.error.message);
    }
  });
};

export const calculateTaskProgress = (task) => {
  let totalSubTasks = 0;
  let completedSubTasks = 0;

  // If it's a main task with subtasks, calculate progress based on subtasks
  if (!task.isSubTask && task.subTask.length > 0) {
    task.subTask.forEach((subTask) => {
      totalSubTasks++;
      if (subTask.status) {
        completedSubTasks++;
      }
    });
  } else {
    // If it's a standalone task or a subtask without subtasks
    totalSubTasks = 1;
    if (task.status) {
      completedSubTasks = 1;
    }
  }

  // Calculate progress percentage
  const progress =
    totalSubTasks > 0 ? (completedSubTasks / totalSubTasks) * 100 : 0;

  return progress;
};

// function to get all details of user and respective task documents
export function useUpdate(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const getUserNtasksUpdate = async (loading = true) => {
    if (user) {
      loading && dispatch(updateLoading(true));
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_HOST}/api/profile/mydetails`,
          method: "GET",
          headers: {
            authToken: user.authToken,
          },
        });

        const details = response.data.data.details;
        dispatch(
          updateUserDetails({
            mytaskid: details.mytask,
            collabtaskid: details.collabtask,
            invitationid: details.invitation,
          })
        );

        // get documents regarding each document ID
        const res = await axios({
          url: `${process.env.REACT_APP_HOST}/api/task/all`,
          method: "POST",
          headers: {
            authToken: user.authToken,
          },
          data: {
            tasks: [...details.mytask],
            collabs: [...details.collabtask],
            invites: [...details.invitation],
          },
        });

        const filteredTasks = res.data.data.tasks.filter(
          (task) => !task.isSubTask
        );

        dispatch(
          updateUserDetails({
            tasks: filteredTasks,
            collabtasks: res.data.data.collabs,
            invitations: res.data.data.invites,
          })
        );
        loading && dispatch(updateLoading(false));
      } catch (error) {
        console.log(error);
        showToast(error.response.data.error.message, "error");
        loading && dispatch(updateLoading(false));
      }
    }
  };

  return [getUserNtasksUpdate];
}
