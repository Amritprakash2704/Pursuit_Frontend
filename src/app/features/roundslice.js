import { createSlice } from "@reduxjs/toolkit";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length))
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const initialState={
    roundData : [] ,
    activeRound : getCookie('activeRound'),

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
            document.cookie="activeRound="+state.activeRound
        } ,
    }
})

export const {setRoundData , setActiveRound} = roundSlice.actions
export default roundSlice.reducer