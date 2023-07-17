import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
