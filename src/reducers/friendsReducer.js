const friendsReducer=(state=[],action)=>{
   
    switch(action.type){
        case('GET_USERSNAMES'):
            const usersList = action.userInfo
            
            state=usersList
            return state
        case('GET_USERSDETAILS'):
    
            return state
 
         default:
             return state
             }
 
         }
 export default friendsReducer