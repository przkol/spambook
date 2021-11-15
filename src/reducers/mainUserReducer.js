const mainUserReducer=(state={
        name:'',
        thumbnail:'',

},action)=>{
   
    switch(action.type){
        case('GET_MAINUSER'):
            const name = action.userInfo.name.first + ' '+action.userInfo.name.last
            const thumbnail = action.userInfo.picture.thumbnail
            state = {
                name,
                thumbnail
            }
            console.log(state)
            return state
         default:
             return state
             }
 
         }
 export default mainUserReducer