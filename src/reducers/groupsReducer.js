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
        shopItems:null,
        shopItemsFlag:false,
        footballHighlights:null,
        footballHighlightsFlag:false
        },
    action)=>{
    const currentState=state
    const targetGroup=state.groups.filter(element=>element.id===action.groupId)
    // console.log(targetGroup)
    // console.log(action.groupId)

    switch(action.type){
        case('GET_FOOTBALL_HIGHLIGHT'):
            currentState.footballHighlights=action.highlight
            currentState.footballHighlightsFlag=true
            // console.log(action.highlight)
            state=currentState
            // console.log(currentState.footballHighlights)
            return state

        case('GET_PRODUCTS'):
            currentState.shopItems=action.products
            currentState.shopItemsFlag=true
            state=currentState
            console.log(state.shopItems)
            console.log(state.shopItemsFlag)
            return state
        case('ADD_GROUP_POST'):
        console.log(action.post,action.groupId)
            state=currentState
            return state
        default:
            return state
            }
 
    }
 export default groupsReducer