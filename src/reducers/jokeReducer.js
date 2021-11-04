const jokeReducer=(state='',action)=>{
   
   switch(action.type){
        case('GET_JOKE'):
        state=action.joke
            return state

        default:console.log('Zła akcja śmieszkowania');
            return state
            }

        }
export default jokeReducer