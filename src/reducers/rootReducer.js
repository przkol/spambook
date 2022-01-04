import  jokeReducer  from "./jokeReducer";
import mainUserReducer from "./mainUserReducer";
import friendsReducer from "./friendsReducer";
import {combineReducers} from 'redux';
import photoReducer from "./photoReducer";
import postReducer from "./postReducer";
import groupsReducer from "./groupsReducer";
import chatReducer from "./chatReducer";


const rootReducer= combineReducers({
    jokeReducer,
    mainUserReducer,
    friendsReducer,
    photoReducer,
    postReducer,
    groupsReducer,
    // chatReducer
})

export default rootReducer