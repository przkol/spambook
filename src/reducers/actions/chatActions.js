export const SET_MESSAGES_SEEN = (friendId) => {
    return {
        type: 'SET_MESSAGES_SEEN',
        friendId
    }
}

export const CREATE_NEW_CHAT = (friendId) => {
    return {
        type: 'CREATE_NEW_CHAT',
        friendId
    }
}


export const ADD_MESSAGE_TO_CHAT = (friendId, source, message, image) => {
    return {
        type: 'ADD_MESSAGE_TO_CHAT',
        friendId,
        source,
        message, image
    }
}

