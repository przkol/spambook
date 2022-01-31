
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

          
            return {...state,
                loaded:true,
                posts:currentPosts}

        case('LIKE_POST'):
            currentPosts[action.index]=action.postToLike

            return {...state,
                posts:currentPosts}

        case('COMMENT_POST'):
            currentPosts[action.postIndex].comments.push({person:action.userInfo,
                comment:action.commentText
            })
            return {...state,
                posts:currentPosts}

         default:
             return state
        }
        
}
 export default postReducer