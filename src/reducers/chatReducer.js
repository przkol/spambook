const chatReducer=(state=[],action)=>{
    const chatNo=state.findIndex(chat=>chat.friend===action.targetFriend)
    switch(action.type){
        case('SET_MESSAGES_SEEN'):
        return [...state.map((chat,index)=>{
            if(index===chatNo){
                chat.unreadMsg=0
            }
            return chat
        })
        ]
        case('CREATE_NEW_CHAT'):
            const newChat={
                friend: action.targetFriend,
                messages:[],
                lastMsgFlag:'noMsg',
                unreadMsg:0
            }

        return [...state,
        newChat]
        case('ADD_MESSAGE_TO_CHAT'):
            const newMessage={source:action.source,text:action.message}
            return [...state.map((chat,index)=>{
                if(index===chatNo){
                    chat.messages.push(newMessage)
                    chat.lastMsgFlag=action.source
                    if(action.source==='friend'){
                        chat.unreadMsg++
                    }
                }
                return chat
            })
            ]
 
         default:
             return state
             }
 
         }
 export default chatReducer