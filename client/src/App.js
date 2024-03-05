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
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Modal from "./pages/Dashboard.js"


function App() {
  const loading = useSelector((store) => store.loading.value);

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
