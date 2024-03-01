import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import {Navbar} from './components/Navbar'
import { Signin } from './pages/SignIn';
import { Signup } from './pages/SignUp';
import { DashBoard } from './pages/Dashboard';
=======
import "./App.css";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavContainer from "./components/NavContainer";
import History from "./pages/History";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

>>>>>>> 17cbdc9cd70f28b9a665d174021b49b7372e4e1c
function App() {
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
<<<<<<< HEAD
          <Route path='/signin' element = {<Signin />} />
          <Route path = '/signup' element = {<Signup />}/>
          <Route path = '/dashboard' element={<DashBoard />}/>
          
=======
          <Route path="/" element={<NavContainer />}>
            <Route path="" element={<Dashboard />} />
            <Route path="history" element={<History />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
>>>>>>> 17cbdc9cd70f28b9a665d174021b49b7372e4e1c
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
