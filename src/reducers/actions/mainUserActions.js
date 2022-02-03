const mainUserAPI = 'https://randomuser.me/api/?noinfo'

const SET_MAINUSER = (userInfo) => {
    return {
        type: 'SET_MAINUSER',
        userInfo
    }
}
export const fetchMainUserInfo = (dispatch) => {
    fetch(mainUserAPI)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => {
            const userInfo = results[0]
            dispatch(SET_MAINUSER(userInfo))
        })
        .catch(err => {
            console.log(err)
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
