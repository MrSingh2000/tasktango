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
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage, showToast } from "./helpers";
import { updateUserState } from "./redux/reducers/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { updateUserDetails } from "./redux/reducers/userDetailsSlice";
import { updateLoading } from "./redux/reducers/loadingSlice";

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageUser = getLocalStorage();
    if (localStorageUser) dispatch(updateUserState(localStorageUser));

  }, []);

  useEffect(() => {
    const getdata = async () => {
      if (user) {
        dispatch(updateLoading(true));
        try {
          const response = await axios({
            url: `${process.env.REACT_APP_HOST}/api/profile/mydetails`,
            method: "GET",
            headers: {
              authToken: user.authToken,
            },
          });
          console.log("resP: ", response.data);

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

          dispatch(
            updateUserDetails({
              tasks: res.data.data.tasks,
              collabtasks: res.data.data.collabs,
              invitations: res.data.data.invites,
            })
          );
          dispatch(updateLoading(false));
        } catch (error) {
          console.log(error);
          showToast(error.response.data.error.message, "error");
          dispatch(updateLoading(false));
        }
      }
    };

    user.authToken && getdata();
  }, [user, dispatch])
  

  return (
    
    <div className="App">
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
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
