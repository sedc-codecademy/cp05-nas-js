import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import WorldNews from './pages/WorldNews/WorldNews'
import Sport from './pages/Sport/Sport'
import LogonIn from './pages/LogonInForm/LogonIn'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/world' element={<WorldNews />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/signOn' element={<LogonIn />} />
          <Route path='news/article/:id' element={<ArticlePage />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
