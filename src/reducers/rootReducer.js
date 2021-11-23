import  jokeReducer  from "./jokeReducer";
import mainUserReducer from "./mainUserReducer";
import friendsReducer from "./friendsReducer";
import {combineReducers} from 'redux';
import photoReducer from "./photoReducer";
import postReducer from "./postReducer";


const rootReducer= combineReducers({
    jokeReducer,
    mainUserReducer,
    friendsReducer,
    photoReducer,
    postReducer
})

export default rootReducer