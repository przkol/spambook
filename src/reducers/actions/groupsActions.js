const productsAPI = 'https://fakestoreapi.com/products?limit=5';
const gamesAPI = 'https://www.freetogame.com/api/games';
const footballAPI = 'https://www.scorebat.com/video-api/v3/';


const GET_PRODUCTS=(products)=>{
return {
    type:'GET_PRODUCTS',
    products    
}}

export const fetchProducts = (dispatch)=>{
        fetch(productsAPI)
        .then(response=>response.json())
        .then(data=>{
            const products = data
            dispatch(GET_PRODUCTS(products))
        })
    
}






