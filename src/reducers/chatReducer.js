const chatReducer = (state = [], action) => {
    const chatNo = state.findIndex(chat => chat.id === action.friendId)
    switch (action.type) {
        case ('SET_MESSAGES_SEEN'):
            return [...state.map((chat, index) => {
                if (index === chatNo) {
                    chat.unreadMsg = 0
                }
                return chat
            })
            ]
        case ('CREATE_NEW_CHAT'):
            const newChat = {
                id: action.friendId,
                messages: [],
                lastMsgFlag: 'noMsg',
                unreadMsg: 0
            }

            return [...state,
                newChat]
        // case('ADD_MESSAGE_TO_CHAT'):
        //     const newMessage={source:action.source,text:action.message}
        //     return [...state.map((chat,index)=>{ 
        //         if(index===chatNo){
        //             chat.messages.push(newMessage)
        //             chat.lastMsgFlag=action.source
        //             if(action.source==='friend'){
        //                 chat.unreadMsg++
        //             }
        //         }
        //         return chat
        //     })
        //     ]

        case ('ADD_MESSAGE_TO_CHAT'):
            const newMessage = { source: action.source, text: action.message }
            const targetChat = state[chatNo]
            targetChat.messages.push(newMessage)
            return [targetChat,
                ...state.filter((chat, index) => {
                    if (index !== chatNo) {
                        return true
                    } else return false
                }),
            ]


        default:
            return state
    }

}
export default chatReducer