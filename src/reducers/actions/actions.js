const jokeAPI = 'https://v2.jokeapi.dev/joke/Any';
const singleUserAPI = 'https://randomuser.me/api/?noinfo'
const usersNamesAPI = 'https://randomuser.me/api/?results=20&inc=name,picture&noinfo'
const detailedUsersAPI = 'https://randomuser.me/api/?results=10&noinfo'

const GET_JOKE=(joke)=>{
return {
    type:'GET_JOKE',
    joke    
}}

export const fetchJoke = (dispatch)=>{
        fetch(jokeAPI)
        .then(response=>response.json())
        .then(data=>{
            const joke = data
            console.log(joke)
            dispatch(GET_JOKE(joke))
        })
    
}


const GET_MAINUSER=(userInfo)=>{
    return{
        type: 'GET_MAINUSER',
        userInfo
    }
}
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

export const fetchMainUserInfo = (dispatch)=>{

    fetch(singleUserAPI)
    .then(response=>response.json())
    .then(data=> data.results)
    .then(results=>{
        const userInfo = results[0]
        console.log(userInfo)
        dispatch(GET_MAINUSER(userInfo))
    })}



export const fetchUsersNames = (dispatch)=>{

    fetch(usersNamesAPI)
    .then(data=> data.results)
    .then(results=>{
        const userInfo = {results}
        console.log(userInfo)
        dispatch(GET_USERSNAMES(userInfo))
    })}

    export const fetchUsersDetails = (dispatch)=>{

        fetch(detailedUsersAPI)
        .then(data=> data.results)
        .then(results=>{
            const userInfo = results
            console.log(userInfo)
            dispatch(GET_USERSDETAILS(userInfo))
        })
    }