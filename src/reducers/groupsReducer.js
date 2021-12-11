import footballImgSmall from '../img/football small.png'
import footballImgFull from '../img/football.png'
import buySellTradeSmall from '../img/tradegroup small.jpg'
import buySellTradeFull from '../img/tradegroup.jpg'

const tradeGroup={
    groupID:1,
    groupName: 'BUY / SELL / TRADE',
    groupBgcPhotoThumbnail: buySellTradeSmall,
    groupBgcPhotoFull:buySellTradeFull,
    postsNo:0
}

const footballGroup={
    groupID:2,
    groupName: 'Football games & highlights',
    groupBgcPhotoThumbnail: footballImgSmall,
    groupBgcPhotoFull:footballImgFull,
    postsNo:0
}


const groupsReducer=(
    state={groups:[tradeGroup,footballGroup],
        shopItems:[],
        footballHighlights:null,
        footballPosts:[],
        tradePosts:[]
        },
    action)=>{
    const currentState=state


    switch(action.type){
        case('GET_FOOTBALL_HIGHLIGHT'):
            currentState.footballHighlights=action.highlight
            currentState.footballHighlightsFlag=true
            // console.log(action.highlight)
            return currentState

        case('GET_PRODUCTS'):
            currentState.shopItems=action.products
            currentState.shopItemsFlag=true
            // console.log(action.products)
            return currentState
        case('ADD_GROUP_POST'):
        console.log(action)
            if(action.groupId===1){
                tradeGroup.postsNo++
                const tradeGroupPosts=state.tradePosts
                tradeGroupPosts.unshift(action.post)
                console.log(tradeGroupPosts)
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    tradePosts: tradeGroupPosts,
                    }
                } else if(action.groupId===2){
                footballGroup.postsNo++
                    const footballGroupPosts=state.footballPosts
                footballGroupPosts.unshift(action.post)
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    footballPosts: footballGroupPosts}
                } 
            else return state
        default:
            return state
            }
 
    }
 export default groupsReducer