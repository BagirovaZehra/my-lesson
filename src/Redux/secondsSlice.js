import { createSlice } from "@reduxjs/toolkit";

export const secondsSlice = createSlice({
    name: 'seconds',
    initialState:{
        seconds:0,
        isRunnig:false,
        history:[],
    },
    reducers:{
        incrementSeconds: (state)=>{
            state.seconds++
        },
        startSeconds: (state)=>{
            state.isRunnig=true
        },
        pausaSeconds: (state)=>{
            state.isRunnig=false
        },
        resetSeconds: (state)=>{
            state.history.push(state.seconds);
            state.seconds=0;
            state.isRunnig=false
        }
    }
})
export const { incrementSeconds, startSeconds, pausaSeconds, resetSeconds } =
  secondsSlice.actions;

export default secondsSlice.reducer;