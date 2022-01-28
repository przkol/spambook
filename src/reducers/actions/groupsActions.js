const productsAPI = 'https://fakestoreapi.com/products?limit=15';
const footballAPI = 'https://www.scorebat.com/video-api/v3/';


const GET_PRODUCTS=(products)=>{
    return {
        type:'GET_PRODUCTS',
        products    
    }}


export const SET_SEEN_STATUS=(groupId)=>{
    return {
        type:'SET_SEEN_STATUS',
        groupId    
    }}

const GET_FOOTBALL_HIGHLIGHT=(highlight)=>{
    return {
        type:'GET_FOOTBALL_HIGHLIGHT',
        highlight    
    }}

export const ADD_GROUP_POST=(post, groupId)=>{
    return {
        type:'ADD_GROUP_POST',
        post,
        groupId
    }}
export const LIKE_GROUP_POST=(groupId,index,postToLike)=>{
        return{
            type: 'LIKE_GROUP_POST',
            groupId,
            index,
            postToLike}
        }
export const COMMENT_GROUP_POST=(groupId,postIndex,commentText,userInfo)=>{
        return{
            type: 'COMMENT_GROUP_POST',
            groupId,
            postIndex,
            commentText,
            userInfo}
        }



export const fetchProducts = (dispatch)=>{
    fetch(productsAPI)
    .then(response=>response.json())
    .then(data=>{
        const products = data
        return products
    })
    .then(products=>dispatch(GET_PRODUCTS(products)))
    .catch(error=>console.log(error))
}

export const fetchFootballHighlight = (dispatch)=>{
    fetch(footballAPI)
    .then(response=>response.json())
    .then(data=>{
        const highlight = data.response[Math.floor(Math.random()*20)]
        return highlight
    })
    .then(highlight=>dispatch(GET_FOOTBALL_HIGHLIGHT(highlight)))
    .catch(error=>console.log(error))

}








