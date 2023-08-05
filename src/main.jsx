import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Ras from './pages/ras'
import { Routes, Route } from 'react-router-dom'
import Joke from './pages/joke-generator.jsx'
import LofiBeats from './pages/lofi-beats.jsx'
import Blog from './pages/blog.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />} ></Route>
        <Route path='/joke-generator' element={<Joke/>}></Route>
        <Route path='/lofibeats' element={<LofiBeats/>}></Route>
        <Route path='/ras' element={<Ras/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
