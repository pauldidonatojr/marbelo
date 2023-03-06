import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Index.js'
import { Navbar2, Footer} from './components/Index.js'

function App() {
 return (
  <BrowserRouter>
   <Navbar2 />
   <Routes>
    <Route path="/" element={<Home />} />
         </Routes>
         <Footer/>
  </BrowserRouter>
 )
}

export default App
