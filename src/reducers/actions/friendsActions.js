const usersNamesAPI = 'https://randomuser.me/api/?results=20&inc=name,picture,email,location,dob,phone,cell,gender&noinfo'

const SET_FRIENDLIST = (userInfo) => {
    return {
        type: 'SET_FRIENDLIST',
        userInfo
    }
}


export const fetchFriendsList = (dispatch) => {

    fetch(usersNamesAPI)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => {
            const userShortInfo = results
            dispatch(SET_FRIENDLIST(userShortInfo))
        })
        .catch(err => console.log(err))
}
