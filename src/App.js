import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Index.js'
import { Navbar, Navbar2} from './components/Index.js'

function App() {
 return (
  <BrowserRouter>
   <Navbar2 />
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  </BrowserRouter>
 )
}

export default App
