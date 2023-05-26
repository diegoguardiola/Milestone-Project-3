import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import LoginForm from './pages/Login'
import NavigationBar from './components/NavigationBar';


function App() {
  const {user} = useAuthContext()

  return (
    <div>
      
      <Router>
        <NavigationBar />
        <Routes>
          <Route 
            path='/' 
            element={user ? <Home /> : <Navigate to="/Login" />} 
          />
          <Route 
            path='/Signup'
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route 
            path="/Login" 
            element={!user ? <LoginForm /> : <Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
