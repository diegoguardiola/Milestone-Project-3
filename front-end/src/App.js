import logo from './logo.svg';
// import './App.css';

import './scss/styles.scss'

function App() {
  return (
    <div className="Main">
      <div className='login'>
        <form>
          <div>
            <label for='user'>Username</label>
          </div>
          <div>
            <input type='text' id='user' name='username' placeholder='Username..'></input>
          </div>
          <div>
            <label for='password'>Password</label>
          </div>
          <div>
            <input type='text' id='password' name='password' placeholder='Password..'></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
