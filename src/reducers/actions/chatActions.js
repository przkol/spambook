export const SET_MESSAGES_SEEN=(targetFriend)=>{
    return {
        type:'SET_MESSAGES_SEEN',
        targetFriend    
    }}

    export const CREATE_NEW_CHAT=(targetFriend)=>{
        return {
            type:'CREATE_NEW_CHAT',
            targetFriend    
        }}


export const ADD_MESSAGE_TO_CHAT=(targetFriend,source,message)=>{
    return {
        type:'ADD_MESSAGE_TO_CHAT',
        targetFriend,
        source,
        message
    }}
    
