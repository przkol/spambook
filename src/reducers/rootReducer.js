import  jokeReducer  from "./jokeReducer";
import userReducer from "./userReducer";
import {combineReducers} from 'redux'


const rootReducer= combineReducers({
    jokeReducer,
    userReducer
})

export default rootReducer