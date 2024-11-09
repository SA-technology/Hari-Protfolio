import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import {BeatLoader} from 'react-spinners'
import './Loading.css'
import { Link } from 'react-router-dom'


const Loading = () => {
  const [laoding,setLoading]=useState()
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  
  return (
    <div >
      <div className="loading">
        <div className='title'>
            <img src={assets.main_img} alt="" />
        </div>
        <div className="load_and_route">
          {
          laoding ? <BeatLoader color='#D5FF4A' /> : <Link to={'/home'}><button className='start_btn'>Get Start</button></Link> 
          }

        </div>
      </div>
    </div>
  )
}

export default Loading
