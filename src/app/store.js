import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './features/tokenslice'
import screenReducer from './features/screenslice'
import userReducer from './features/userslice'
import seasonReducer from './features/seasonSlice'
import roundReducer from './features/roundslice'
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    token : tokenReducer ,
    screen : screenReducer ,
    user : userReducer ,
    season : seasonReducer ,
    round : roundReducer ,
  },
});
