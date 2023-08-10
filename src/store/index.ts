import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counterSlice';
import userReducer from './reducers/user-data';
// import { combineReducers } from 'redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        userData: userReducer,
    },
    // combineReducers({
    //     counter: counterReducer,
    // })
});
