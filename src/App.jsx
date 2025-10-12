import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Find from './components/Find'
import DisplayPage from './components/DisplayPage';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find" element={<Find />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
