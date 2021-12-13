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
            currentState.shopItems=action.products[Math.floor(Math.random()*15)]
            currentState.shopItemsFlag=true
            console.log(currentState.shopItems)
            return {...state,
            shopItems:action.products[Math.floor(Math.random()*15)],
            shopItemsFlag:true
        }
        case('ADD_GROUP_POST'):
        console.log(action.post)
            if(action.groupId===1){
                tradeGroup.postsNo++
                const tradeGroupPosts=state.tradePosts
                tradeGroupPosts.unshift(action.post)
                if(tradeGroupPosts.length>15){
                tradeGroupPosts.pop()
                }
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    tradePosts: tradeGroupPosts,
                    }
                } else if(action.groupId===2){
                footballGroup.postsNo++
                    const footballGroupPosts=state.footballPosts
                footballGroupPosts.unshift(action.post)
                if(footballGroupPosts.length>15){
                    footballGroupPosts.pop()
                    }
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    footballPosts: footballGroupPosts}
                } 
            else return state
        case('SET_SEEN_STATUS'):
        console.log(action.groupId, typeof(action.groupId))

            if(action.groupId==='1'){
                currentState.tradePosts.forEach((element,index)=>{
                    currentState.tradePosts[index].seenByUser=true
                })}
            if(action.groupId==='2'){
                currentState.footballPosts.forEach((element,index)=>{
                    currentState.footballPosts[index].seenByUser=true
                })
             }
             console.log(currentState)
            return currentState

                
        default:
            return state
            }
 
    }
 export default groupsReducer