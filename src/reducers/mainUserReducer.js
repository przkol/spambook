const mainUserReducer=(state={loaded:false
        
},action)=>{

    const userInfo=action.userInfo
   
    switch(action.type){
        case('SET_MAINUSER_DETAILS'):

                state = {
                loaded:true,
                userInfo
                }
                console.log('w reducerze')
                console.log(action)
            return state
        case('GET_MAINUSER'):

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