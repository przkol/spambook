const mainUserReducer=(state={loaded:false
        
},action)=>{
    const userInfo=action.userInfo
   
    switch(action.type){
        case('SET_MAINUSER_DETAILS'):

                state = {
                loaded:true,
                userInfo
                }
            return state
        case('GET_MAINUSER'):
        console.log(action)
                const regDate=new Date(userInfo.registered.date)
                const birthDate=new Date(userInfo.dob.date)
                console.log(regDate.toISOString())
                console.log(regDate.toDateString())
                console.log(regDate.toLocaleDateString())
            state = {
                loaded:true,
                userInfo:{...userInfo,
                    registered:{...userInfo.registered,
                        date:regDate.toLocaleDateString()},
                    dob:{...userInfo.dob,
                            date:birthDate.toLocaleDateString()}
            }
                }
            return state
        
         default:
             return state
             }
 
         }
 export default mainUserReducer