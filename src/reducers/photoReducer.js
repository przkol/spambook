const photoReducer=(state=[],action)=>{
    switch(action.type){
        case('GET_PHOTO'):
            const photoToAdd = action.photo        
            state={photoToAdd}        
            return state
        
        default:
             return state
             }
 
         }
 export default photoReducer