const photoAPI = 'https://cataas.com/cat?type=md&json=true';


const GET_PHOTO=(photo)=>{
return {
    type:'GET_PHOTO',
    photo    
}}

export const fetchPhoto = (dispatch)=>{
        fetch(photoAPI)
        .then(response=>response.json())
        .then(data=>{
            const photo = 'https://cataas.com/'+ data.url
            dispatch(GET_PHOTO(photo))
        })
    
}






