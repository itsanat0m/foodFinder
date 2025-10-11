import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Find from './components/Find'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<HomePage />} />
          <Route path ="/find" element = {<Find />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
