import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import secondsReducer from './secondsSlice'

const store = configureStore({
  reducer: {
    timer: timerReducer,
    seconds: secondsReducer,
  },
});

export default store;
