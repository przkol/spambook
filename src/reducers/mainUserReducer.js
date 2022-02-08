const mainUserReducer = (state = {
    loaded: false

}, action) => {

    const userInfo = action.userInfo
    switch (action.type) {
        case ('SET_MAINUSER_DETAILS'):
            return {
                ...state,
                loaded: true,
                userInfo
            }

        case ('SET_MAINUSER_PICTURE'):
            const picture = {
                large: action.picture,
                medium: action.picture,
                thumbnail: action.picture
            }
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    picture: picture
                }
            }
        case ('SET_MAINUSER'):
            const regDate = new Date(userInfo.registered.date)
            const birthDate = new Date(userInfo.dob.date)
            return {
                ...state,
                loaded: true,
                userInfo: {
                    ...userInfo,
                    registered: {
                        ...userInfo.registered,
                        date: regDate.toLocaleDateString()
                    },
                    dob: {
                        ...userInfo.dob,
                        date: birthDate.toLocaleDateString()
                    }
                }
            }

        default:
            return state
    }

}
export default mainUserReducer