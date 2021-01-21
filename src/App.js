import './App.css';
import { useEffect, useState } from 'react'
import Login from './components/login'
import Landing from './components/landing'
import Home from './components/home'

import { login, signup } from './api.services'

function App() {

  const [openingAct, changeOpener] = useState(<Landing />)
  const [user, setUser] = useState(null)

  const submitForm = (eventInfo) => {
    login(eventInfo)
      .then(res => res.json())
      .then(setUser)
      .catch(alert)
  }

  useEffect(() => {
    // on page load, wait two seconds then render the login
    setTimeout(() => {
      changeOpener(<Login submitForm={submitForm} />)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {user ?
        <Home />
        :
        openingAct
      }

    </div>
  );
}

export default App;
