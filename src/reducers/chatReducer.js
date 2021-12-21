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
            const newMessage={source:action.source,text:action.message}
            return [...state.map((chat,index)=>{
                if(index===chatNo){
                    chat.messages.push(newMessage)
                }
                return chat
            })
            ]
 
         default:
             return state
             }
 
         }
 export default chatReducer