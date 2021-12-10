import footballImgSmall from '../img/football small.png'
import footballImgFull from '../img/football.png'
import buySellTradeSmall from '../img/tradegroup small.jpg'
import buySellTradeFull from '../img/tradegroup.jpg'

const tradeGroup={
    groupID:1,
    groupName: 'BUY / SELL / TRADE',
    groupBgcPhotoThumbnail: buySellTradeSmall,
    groupBgcPhotoFull:buySellTradeFull,
    posts:[]
}

const footballGroup={
    groupID:2,
    groupName: 'Football games & highlights',
    groupBgcPhotoThumbnail: footballImgSmall,
    groupBgcPhotoFull:footballImgFull,
    posts:[]
}


const groupsReducer=(
    state={groups:[tradeGroup,footballGroup],
        shopItems:[],
        shopItemsFlag:false,
        footballHighlights:null,
        footballHighlightsFlag:false
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
        // console.log(action.post,action.groupId)
        // console.log(currentState.groups)
        const targetGroup=currentState.groups.findIndex(element=>element.groupID===action.groupId)
        currentState.groups[targetGroup].posts.unshift(action.post)
        // console.log(state.groups)
            return currentState
        default:
            return state
            }
 
    }
 export default groupsReducer