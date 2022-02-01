import footballImgSmall from '../img/football small.png'
import footballImgFull from '../img/football.png'
import buySellTradeSmall from '../img/tradegroup small.jpg'
import buySellTradeFull from '../img/tradegroup.jpg'

const tradeGroup={
    groupId:window.btoa('BUY / SELL / TRADE'),
    groupName: 'BUY / SELL / TRADE',
    groupBgcPhotoThumbnail: buySellTradeSmall,
    groupBgcPhotoFull:buySellTradeFull,
    posts:[]
}

const footballGroup={
    groupId:window.btoa('Football games & highlights'),
    groupName: 'Football games & highlights',
    groupBgcPhotoThumbnail: footballImgSmall,
    groupBgcPhotoFull:footballImgFull,
    posts:[]
}


const groupsReducer=(
    state={groups:[tradeGroup,footballGroup],
        shopItems:[],
        footballHighlights:{},
        footballPosts:[],
        tradePosts:[]
        },
    action)=>{
    const currentState=state
    switch(action.type){
        case('GET_FOOTBALL_HIGHLIGHT'):
            const footballHighlights=action.highlight
            currentState.footballHighlightsFlag=true
            return {...state,
                footballHighlights,
                footballHighlightsFlag:true}

        case('GET_PRODUCTS'):
                const shopItems=action.products[Math.floor(Math.random()*15)]
            return {...state,
            shopItems,
            shopItemsFlag:true
        }
        case('ADD_GROUP_POST'):
        const{groupId,post} = action

            return{...state,
            groups:[...state.groups.map(group=>{
                if(group.groupId===groupId){
                    group.posts.push(post)
                    return group
                } else return group
                    

            })]}

        case('SET_SEEN_STATUS'):

            return{...state,
                groups:[...state.groups.map(group=>{
                    if(group.groupId===action.groupId){

                        return {...group,
                        posts:group.posts.map(post=>{return({...post,seenByUser:true})})
                    }} else return group
                        
    
                })]}
    
        case('LIKE_GROUP_POST'):

            return {...state,
            groups:[...state.groups.map(group=>{
                if(group.groupId===action.groupId){
                    group.posts[action.index]=action.postToLike
                    return group
                } else return group})]}

        case('COMMENT_GROUP_POST'):
        const commentToBeAdded={person:action.userInfo,comment:action.commentText}
        return {...state,
            groups:[...state.groups.map(group=>{
                if(group.groupId===action.groupId){
                    group.posts[action.postIndex].comments.push(commentToBeAdded)
                    return group
                } else return group})]}
        
        case('ADD_NEW_GROUP'):
        const newGroup={
            groupId:window.btoa(action.groupName),
            groupName: action.groupName,
            groupBgcPhotoThumbnail: action.groupBgcPhoto,
            groupBgcPhotoFull:action.groupBgcPhoto,
            posts:[]
        }
        return {...state,
        groups:[...state.groups,newGroup]}
                
        default:
            return state
            }
 
    }
 export default groupsReducer