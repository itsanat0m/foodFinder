import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/HomePage'
import './App.css'
import QuestionBox from './components/QuestionBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage />
      </div>
      <div>
        <QuestionBox />
      </div>
    </>
  )
}

export default App
