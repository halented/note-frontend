import './App.css';
import { useEffect, useState } from 'react'
import Login from './components/login'

function App() {

  const [openingAct, changeOpener] = useState("hello...")
  const [tester, changeTester] = useState(true)

  useEffect(() => {
    // on page load, wait 2 seconds then add "there" to title
    if (tester) {
      setTimeout(() => {
        changeOpener("hello...there")
        changeTester(false)
      }, 2000)
    }
    else {
      setTimeout(() => {
        changeOpener(<Login />)
      }, 2000)
    }
  }, [tester])



  return (
    <div className="App">
      <header className="App-header">
        {openingAct}
      </header>
    </div>
  );
}

export default App;
