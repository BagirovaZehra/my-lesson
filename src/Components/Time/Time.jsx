import React from 'react'
import timecss from './Time.module.css'
import { useState } from 'react'
const Time = () => {
  const [hours,setHours]=useState("")
  const [minutes,setMinutes]=useState("")
  const [seconds,setSeconds]=useState("")
   setInterval(()=>{
    let now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds()
    setHours(currentHours);
    setMinutes(currentMinutes);
    setSeconds(currentSeconds)
    
   },1000)
  return (
    <div>
      <h1 className={timecss.header}>{hours} {minutes} {seconds}</h1>
    </div>
  )
}

export default Time