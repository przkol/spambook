const mainUserReducer=(state={loaded:false
        
},action)=>{
   
    switch(action.type){
        case('GET_MAINUSER'):
            const userInfo=action.userInfo
            state = {
                loaded:true,
                userInfo
                }
            return state
         default:
             return state
             }
 
         }
 export default mainUserReducer