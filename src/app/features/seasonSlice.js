import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seasonData : [] ,
    activeSeason : -1 ,

}

export const seasonSlice = createSlice({
    name : 'season' ,
    initialState ,

    reducers : {
        setSeasonData : (state,action)=>{
            state.seasonData = action.payload
        },
        setActiveSeason : (state,action)=>{
            state.activeSeason = action.payload
        }
    }

});
export const{setSeasonData,setActiveSeason} = seasonSlice.actions
export default  seasonSlice.reducer