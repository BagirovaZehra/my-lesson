import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementHours, decrementHours,
  incrementMinutes, decrementMinutes,
  incrementSeconds, decrementSeconds,
  updateHours, updateMinutes, updateSeconds,
  startTimer, pauseTimer, decrementTime, saveHistory
} from '../../Redux/timerSlice';
import timercss from './Timer.module.css';

const Timer = () => {
  const { hours, minutes, seconds, isRunning, history } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const formatTime = () => {
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className={timercss.timer}>
      <div>
        <div>
          <button 
            onClick={() => dispatch(incrementHours())}>
            +
          </button>
          <input 
  value={hours} 
  onChange={(e) => {
    const value = e.target.value.replace(/^0+/, ''); 
    dispatch(updateHours(Number(value) || 0)); 
  }}
  className={timercss.input} 
  type="text" 
/>

          <button 
            onClick={() => dispatch(decrementHours())}>
            -
          </button>
        </div>

        <div>
          <button 
            onClick={() => dispatch(incrementMinutes())}>
            +
          </button>
          <input 
            value={minutes} 
            onChange={(e) =>{ 
              const value = e.target.value.replace(/^0+/, '');
              dispatch(updateMinutes(Number(value)))}}
            className={timercss.input} 
            type="text" 
          />
          <button 
            onClick={() => dispatch(decrementMinutes())}>
            -
          </button>
        </div>

        <div>
          <button 
            className={timercss.controlButton} 
            onClick={() => dispatch(incrementSeconds())}>
            +
          </button>
          <input 
            value={seconds} 
            onChange={(e) => {
              const value = e.target.value.replace(/^0+/, '');
              dispatch(updateSeconds(Number(value)))}}
            className={timercss.input} 
            type="text" 
          />
          <button 
            onClick={() => dispatch(decrementSeconds())}>
            -
          </button>
        </div>
      </div>

      <div>
        <button  
          onClick={() => {
            if (!isRunning) dispatch(startTimer());
          }}>
          Start
        </button>
        <button 
          onClick={() => {
            if (isRunning) {
              dispatch(pauseTimer());
              dispatch(saveHistory());
            }
          }}>
          Pause
        </button>
      </div>

      <h1>{formatTime()}</h1>

      <div >
        <h2>Keçmiş ölçmələr:</h2>
        <ul>
          {history.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;

