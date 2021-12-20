const usersNamesAPI = 'https://randomuser.me/api/?results=20&inc=name,picture,id&noinfo'
const detailedUsersAPI = 'https://randomuser.me/api/?results=10&noinfo'

const GET_USERSNAMES=(userInfo)=>{
    return{
        type: 'GET_USERSNAMES',
        userInfo
    }
}
const GET_USERSDETAILS=(userInfo)=>{
    return{
        type: 'GET_USERSDETAILS',
        userInfo
    }
}


export const fetchFriendsList = (dispatch)=>{

    fetch(usersNamesAPI)
    .then(response=>response.json())
    .then(data=> data.results)
    .then(results=>{
        const userShortInfo = results
        dispatch(GET_USERSNAMES(userShortInfo))
    })}

export const fetchUsersDetails = (dispatch)=>{

    fetch(detailedUsersAPI)
    .then(response=>response.json())
    .then(data=> data.results)
    .then(results=>{
        const userDetailedInfo = results
        console.log(userDetailedInfo)
        dispatch(GET_USERSDETAILS(userDetailedInfo))
    })}