import { toast } from "react-toastify";

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
