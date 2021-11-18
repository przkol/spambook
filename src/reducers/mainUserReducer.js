const mainUserReducer=(state={
        name:'',
        thumbnail:'',

},action)=>{
   
    switch(action.type){
        case('GET_MAINUSER'):
            const picture = action.userInfo.picture.thumbnail
            state = {
                name:{
                    first:action.userInfo.name.first,
                    last: action.userInfo.name.last
                },
                picture:{
                    thumbnail:picture
                }
            }
            return state
         default:
             return state
             }
 
         }
 export default mainUserReducer