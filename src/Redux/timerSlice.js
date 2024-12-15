import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    history: [],
  },
  reducers: {
    incrementHours: (state) => {
      state.hours = (state.hours + 1) % 24;
    },
    decrementHours: (state) => {
      state.hours = (state.hours - 1 + 24) % 24;
    },
    incrementMinutes: (state) => {
      state.minutes = (state.minutes + 1) % 60;
    },
    decrementMinutes: (state) => {
      state.minutes = (state.minutes - 1 + 60) % 60;
    },
    incrementSeconds: (state) => {
      state.seconds = (state.seconds + 1) % 60;
    },
    decrementSeconds: (state) => {
      state.seconds = (state.seconds - 1 + 60) % 60;
    },
    updateHours: (state, action) => {
      state.hours = Math.max(0, Math.min(23, action.payload)); 
    },
    updateMinutes: (state, action) => {
      state.minutes = Math.max(0, Math.min(59, action.payload)); 
    },
    updateSeconds: (state, action) => {
      state.seconds = Math.max(0, Math.min(59, action.payload)); 
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    decrementTime: (state) => {
      if (state.seconds > 0) {
        state.seconds -= 1;
      } else if (state.minutes > 0) {
        state.minutes -= 1;
        state.seconds = 59;
      } else if (state.hours > 0) {
        state.hours -= 1;
        state.minutes = 59;
        state.seconds = 59;
      } else {
        state.isRunning = false;
      }
    },
    saveHistory: (state) => {
      const formattedTime = `${state.hours}:${state.minutes < 10 ? `0${state.minutes}` : state.minutes}:${state.seconds < 10 ? `0${state.seconds}` : state.seconds}`;
      state.history.push(formattedTime);
    },
  },
});

export const { 
  incrementHours, decrementHours,
  incrementMinutes, decrementMinutes,
  incrementSeconds, decrementSeconds,
  updateHours, updateMinutes, updateSeconds,
  startTimer, pauseTimer, decrementTime, saveHistory 
} = timerSlice.actions;

export default timerSlice.reducer;
