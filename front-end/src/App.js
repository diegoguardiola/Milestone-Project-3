import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
