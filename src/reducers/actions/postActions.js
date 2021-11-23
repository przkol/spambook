

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
export const SHOW_POST_COMMENTS=(index,postToEnable)=>{
    return{
        type: 'SHOW_POST_COMMENTS',
        index,postToEnable}
    }

export const COMMENT_POST=(postIndex,commentText,userInfo)=>{
    return{
        type: 'COMMENT_POST',
        postIndex,
        commentText,
        userInfo}
    }

