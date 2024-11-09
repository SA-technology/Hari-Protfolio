import React from 'react'
import { Routes ,Route, Navigate } from 'react-router-dom'
import Loading from './component/Loading/Loading'
import RoterPages from './Router/RoterPages'
import About from './component/About/About'

const App = () => {
  return (
    <div>
  
    <Routes>
      <Route path={"/load"} element={<Loading/>} ></Route>
      <Route path={'/home'} element={<RoterPages/>}/>
      <Route path={'*'} element={<Navigate to='/load'/>}/>
      <Route path={"/about"} element={<About/>}/>
    </Routes>
    
    </div>
  )
}

export default App
