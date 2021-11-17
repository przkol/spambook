const jokeAPI = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw';


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
            dispatch(GET_JOKE(joke))
        })
    
}






