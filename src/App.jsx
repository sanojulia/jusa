import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from './pages/home.jsx'
import { Men } from './pages/men.jsx'
import { Women } from './pages/women.jsx'


function App() {

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
      </Routes>
    </Router>

  )
}

export default App
