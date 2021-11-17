import  jokeReducer  from "./jokeReducer";
import mainUserReducer from "./mainUserReducer";
import friendsReducer from "./friendsReducer";
import {combineReducers} from 'redux';
import photoReducer from "./photoReducer";


const rootReducer= combineReducers({
    jokeReducer,
    mainUserReducer,
    friendsReducer,
    photoReducer
})

export default rootReducer