const chatReducer=(state=[],action)=>{
   
    switch(action.type){
        case('OPEN_CHAT'):

            return state
        case('CREATE_NEW_CHAT'):
            const newChat={
                friend: action.targetFriend,
                messages:[]
            }

        return [...state,
        newChat]
        case('ADD_MESSAGE_TO_CHAT'):
            const chatNo=state.findIndex(chat=>chat.friend===action.targetFriend)
            console.log(chatNo)
            return state
 
         default:
             return state
             }
 
         }
 export default chatReducer