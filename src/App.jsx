import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from './pages/home.jsx'
import { Mens } from './pages/mens.jsx'
import { Womens } from './pages/womens.jsx'


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
      </Routes>
    </Router>

  )
}

export default App
