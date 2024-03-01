import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Navbar} from './components/Navbar'
import { Signin } from './pages/SignIn';
import { Signup } from './pages/SignUp';
import { DashBoard } from './pages/Dashboard';
function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <Navbar/>
      
        <Routes>
          <Route path='/signin' element = {<Signin />} />
          <Route path = '/signup' element = {<Signup />}/>
          <Route path = '/dashboard' element={<DashBoard />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
