

 export const ADD_POST=(post)=>{
    return{
        type: 'ADD_POST',
        post}
    }

export const LIKE_POST=(index,postToLike)=>{
    return{
        type: 'LIKE_POST',
        index,postToLike}
    }
export const COMMENT_POST=(postIndex,commentText,userInfo)=>{
    return{
        type: 'COMMENT_POST',
        postIndex,
        commentText,
        userInfo}
    }

