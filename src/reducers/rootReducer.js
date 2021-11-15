import  jokeReducer  from "./jokeReducer";
import mainUserReducer from "./mainUserReducer";
import friendsReducer from "./friendsReducer";
import {combineReducers} from 'redux'


const rootReducer= combineReducers({
    jokeReducer,
    mainUserReducer,
    friendsReducer
})

export default rootReducer