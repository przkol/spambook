const mainUserAPI = 'https://randomuser.me/api/?noinfo'

const GET_MAINUSER = (userInfo) => {
    return {
        type: 'GET_MAINUSER',
        userInfo
    }
}
export const fetchMainUserInfo = (dispatch) => {
    fetch(mainUserAPI)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => {
            const userInfo = results[0]
            dispatch(GET_MAINUSER(userInfo))
        })
}

export const SET_MAINUSER_DETAILS = (userInfo) => {
    return {
        type: 'SET_MAINUSER_DETAILS',
        userInfo

    }
}

export const SET_MAINUSER_PICTURE = (picture) => {
    return {
        type: 'SET_MAINUSER_PICTURE',
        picture

    }
}
