const productsAPI = 'https://fakestoreapi.com/products?limit=5';
const footballAPI = 'https://www.scorebat.com/video-api/v3/';


const GET_PRODUCTS=(products)=>{
    return {
        type:'GET_PRODUCTS',
        products    
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



export const fetchProducts = (dispatch)=>{
    fetch(productsAPI)
    .then(response=>response.json())
    .then(data=>{
        const products = data
        return products
    })
    .then(products=>dispatch(GET_PRODUCTS(products)))
}

export const fetchFootballHighlight = (dispatch)=>{
    fetch(footballAPI)
    .then(response=>response.json())
    .then(data=>{
        const highlight = data.response[Math.floor(Math.random()*20)]
        return highlight
    })
    .then(highlight=>dispatch(GET_FOOTBALL_HIGHLIGHT(highlight)))
}








