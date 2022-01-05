
const postReducer=(state={
    loaded:false,
    posts:[],
        
},action)=>{
   const post = action.post
   const currentPosts=state.posts

    switch(action.type){
        case('ADD_POST'):
            currentPosts.unshift(post)
            if(currentPosts.length>=15) 
                {currentPosts.pop()}
            state={...state,
                loaded:true,
                posts:currentPosts}            
            return state

        case('LIKE_POST'):
            currentPosts[action.index]=action.postToLike
            state={loaded:true,
            posts:currentPosts}
            return state

        case('COMMENT_POST'):
            currentPosts[action.postIndex].comments.push({person:action.userInfo,
                comment:action.commentText
            })
            return state

        case('CREATE_POST'):

            state = {
                loaded:true,
                }
            return state
        
         default:
             return state
        }
        
}
 export default postReducer