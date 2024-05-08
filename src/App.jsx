
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <LoginContext.Provider value={{username, setShowProfile, setUsername}}>
      {showProfile ? <Profile /> : <Login />}      
    </LoginContext.Provider>
  )
}

export default App
