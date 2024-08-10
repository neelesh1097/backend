import React from 'react'
import {Route ,BrowserRouter, Routes} from 'react-router-dom'

import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav'

import Footer1 from './components/Footer'
import Signup from './components/Signup';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />

    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    
    <Footer1 />
  </BrowserRouter>
</div>
  )
}

export default App