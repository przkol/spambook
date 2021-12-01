const productsAPI = 'https://fakestoreapi.com/products?limit=1';

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



export const fetchProducts = (dispatch)=>{
    fetch(productsAPI)
    .then(response=>response.json())
    .then(data=>{
        const products = data[0]
        dispatch(GET_PRODUCTS(products))
        console.log(products)
    })
}

export const fetchFootballHighlight = (dispatch)=>{
    fetch(footballAPI)
    .then(response=>response.json())
    .then(data=>{
        const highlight = data.response[0]
        dispatch(GET_FOOTBALL_HIGHLIGHT(highlight))
        console.log(highlight)
    })
}








