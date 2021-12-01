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


const groupsReducer=(state=[tradeGroup,footballGroup],action)=>{
    const currentState=state
    switch(action.type){
        case('GET_FOOTBALL_HIGHLIGHT'):
            console.log(action)
            return state

        case('GET_PRODUCTS'):
            currentState.productPosts=action.products

            console.log(currentState.productPosts)
            
            return state
    



         default:
            return state
            }
 
         }
 export default groupsReducer