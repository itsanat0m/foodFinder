import { useState } from 'react'
import HomePage from './components/HomePage';
import Find from './components/Find'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<HomePage />} />
        <Route path ="/find" element = {<Find />} />
      </Routes>
      <div>
        <a href="http://localhost:5173/" name = "Start game"/>
      </div>
    </>
  )
}

export default App
