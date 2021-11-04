const userReducer=(state='',action)=>{
   
    switch(action.type){
        case('GET_MAINUSER'):
            const name = action.userInfo.name.first + ' '+action.userInfo.name.last
            state = {
                name
            }
            console.log(state)
            return state
        case('GET_USERSNAMES'):
        
            return state
        case('GET_USERSDETAILS'):
    
            return state
 
         default:console.log('Zła akcja USERS');
             return state
             }
 
         }
 export default userReducer