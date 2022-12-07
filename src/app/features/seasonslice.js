import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seasonData : [] ,
    activeSeason : -1 ,
    modalSeasonData : [],
    modalSeason : -1,
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
        } ,
        setModalSeasonData : (state,action)=>{
            state.modalSeasonData=action.payload
        } ,
        setModalSeason : (state,action)=>{
            state.modalSeason=action.payload
        },
    }

});
export const{setSeasonData,setActiveSeason,setModalSeasonData,setModalSeason} = seasonSlice.actions
export default  seasonSlice.reducer