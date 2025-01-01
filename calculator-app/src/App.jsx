import { useState } from 'react'

import Display from './display.jsx'
import Keypad from './keypad.jsx'
import './App.css'

function App() {
  // const [currentValue, setCurrentValue] = useState("");
  // const [operator, setOperator] = useState([])
  // const [displayValue, setDisplayValue] =useState([])

  const [state, setState] = useState({
    currentValue: "0",
    displayValue: [],
    lastClicked: ""
  })

  return (
    
      <div className='wrapper-container'>
      <Display state={state} setState={setState} />
      <Keypad state={state} setState={setState} />
      </div>
    
  )
}

export default App
