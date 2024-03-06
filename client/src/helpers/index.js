import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateLoading } from "../redux/reducers/loadingSlice";
import axios from "axios";
import { updateUserState } from "../redux/reducers/userSlice";

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
