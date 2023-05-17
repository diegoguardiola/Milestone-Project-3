import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Tracker from './pages/Tracker';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Tracker' element={<Tracker/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
