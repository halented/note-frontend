import './App.css';
import { useEffect, useState } from 'react'
import Login from './components/login'
import Landing from './components/landing'

import { login, signup } from './api.services'

function App() {

  const [openingAct, changeOpener] = useState(<Landing />)

  useEffect(() => {
    // on page load, wait two seconds then render the login
    setTimeout(() => {
      changeOpener(<Login />)
    }, 2000)
  }, [])

  const submitForm = (eventInfo) => {
    login(eventInfo)
      .then(res => res.json())
      .then(json => json)

  }

  return (
    <div className="App">
      {/* {openingAct} */}
      <Login submitForm={submitForm} />
    </div>
  );
}

export default App;
