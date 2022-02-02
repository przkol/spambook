const usersNamesAPI = 'https://randomuser.me/api/?results=20&inc=name,picture,email,location,dob,phone,gender&noinfo'

const GET_USERSNAMES = (userInfo) => {
    return {
        type: 'GET_USERSNAMES',
        userInfo
    }
}


export const fetchFriendsList = (dispatch) => {

    fetch(usersNamesAPI)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => {
            const userShortInfo = results
            dispatch(GET_USERSNAMES(userShortInfo))
        })
}
