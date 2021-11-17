const photoAPI = 'https://thatcopy.pw/catapi/rest/';


const GET_PHOTO=(photo)=>{
return {
    type:'GET_PHOTO',
    photo    
}}

export const fetchPhoto = (dispatch)=>{
        fetch(photoAPI)
        .then(response=>response.json())
        .then(data=>{
            const photo = data.url
            dispatch(GET_PHOTO(photo))
        })
    
}






