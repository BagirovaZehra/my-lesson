import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementSeconds, startSeconds, pausaSeconds, resetSeconds } from '../../Redux/secondsSlice';
 import secondscss from './Seconds.module.css';
 
 const Seconds = () => {
  const {seconds,isRunnig,history} = useSelector((state)=>state.seconds)
  const dispatch = useDispatch();
  useEffect(()=>{
    let interval;
    if(isRunnig){
      interval = setInterval(()=>{
        dispatch(incrementSeconds())
      },1000)
    }
    return ()=> clearInterval(interval)
  },[isRunnig,dispatch])
  const formatTime = (time)=>{
    const mins = Math.floor(time/60);
    const secs = time%60;
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  }
   return (
     <div className={secondscss.second}>
      <div>
        <button className={secondscss.seconds} onClick={()=> dispatch(startSeconds())}>Start</button>
        <button className={secondscss.seconds} onClick={()=> dispatch(pausaSeconds())}>Pauza</button>
        <button className={secondscss.seconds} onClick={()=> dispatch(resetSeconds())}>Sifirla</button>
        <h1>{formatTime(seconds)}</h1>
          <h2>Keçmiş ölçmələr:</h2>
          <ul>
            {history.map((time,index)=>(
              <li key={index}>{time} saniye</li>
            ))}
          </ul>
      </div>
     </div>
   )
 }
 
 export default Seconds
