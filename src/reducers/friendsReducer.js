const friendsReducer=(state={usersList:[],usersListLoadedFlag:false},action)=>{
    switch(action.type){
        case('GET_USERSNAMES'):
            const usersList = action.userInfo
            return {usersList,
                    usersListLoadedFlag:true}
        case('GET_USERSDETAILS'):
    
            return state
 
         default:
             return state
             }
 
         }
 export default friendsReducer