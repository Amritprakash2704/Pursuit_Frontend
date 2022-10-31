import { createSlice } from "@reduxjs/toolkit";

const initialState={
    roundData : [] ,
    activeRound : -1,

}

const roundSlice = createSlice({
    name : 'round' ,
    initialState ,
    reducers : {
        setRoundData : (state,action) => {
            state.roundData=action.payload
        } ,
        setActiveRound : (state,action)=>{
            state.activeRound=action.payload
        } ,
    }
})

export const {setRoundData , setActiveRound} = roundSlice.actions
export default roundSlice.reducer