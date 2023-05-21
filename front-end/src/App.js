import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import LoginForm from './pages/Login'
import Tracker from './pages/Tracker';
import NavigationBar from './components/NavigationBar';
//import { CurrentUser } from "../contexts/CurrentUser";

function App() {
  return (
    <div>
      
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path='/Tracker' element={<Tracker/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
