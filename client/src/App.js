import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavContainer from "./components/NavContainer";
import History from "./pages/History";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import DashBoard from "./pages/Dashboard";
import Invitations from "./pages/Invitations";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage, useUpdate } from "./helpers";
import { updateUserState } from "./redux/reducers/userSlice";
import { useEffect } from "react";
import io from "socket.io-client";
import Notification from "./pages/Notification";
import Assigned from "./pages/Assigned";

function App() {
  const socket = io(`${process.env.REACT_APP_HOST}`);

  // Listening for events from the server
  socket.on("profileUpdate", (data) => {
    console.log("profile updated");
  });

  const [getUserNtasksUpdate] = useUpdate();

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageUser = getLocalStorage();
    if (localStorageUser) {
      dispatch(updateUserState(localStorageUser));
      console.log("here:", localStorageUser.userId);
    }
  }, []);

  useEffect(() => {
    user.authToken && socket.emit("userId", { userId: user.userId });
    user.authToken && getUserNtasksUpdate();
  }, [user]);

  return (
    <div className="App text-black dark:text-white">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<NavContainer />}>
            <Route path="" element={<DashBoard />} />
            <Route path="history" element={<History />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notification" element={<Notification />} />
            <Route path="assigned" element={<Assigned />} />
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
