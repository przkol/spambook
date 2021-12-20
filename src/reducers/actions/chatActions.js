export const OPEN_CHAT=(targetFriend)=>{
    return {
        type:'OPEN_CHAT',
        targetFriend    
    }}

    export const CREATE_NEW_CHAT=(targetFriend)=>{
        return {
            type:'CREATE_NEW_CHAT',
            targetFriend    
        }}


export const ADD_MESSAGE_TO_CHAT=(targetFriend,message)=>{
    return {
        type:'ADD_MESSAGE_TO_CHAT',
        targetFriend,
        message
    }}
    
