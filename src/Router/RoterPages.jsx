import React from 'react'
import Nav from '../component/Nav/Nav'
import { Routes,Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from '../component/About/About'
const RoterPages = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        {/* <Route path={'/homepage'} element={<Home/>}  /> */}
      </Routes>
     <Home/>
     {/* <About/> */}
    </div>
  )
}

export default RoterPages
