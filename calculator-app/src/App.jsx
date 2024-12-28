import { useState } from 'react'

import Display from './display.jsx'
import Keypad from './keypad.jsx'
import './App.css'

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState("")
  const [displayValue, setDisplayValue] =useState(0)

  return (
    
      <div className='wrapper-container'>
      <Display />
      <Keypad />
      </div>
    
  )
}

export default App
