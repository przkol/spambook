import footballImgSmall from '../img/football small.png'
import footballImgFull from '../img/football.png'
import buySellTradeSmall from '../img/tradegroup small.jpg'
import buySellTradeFull from '../img/tradegroup.jpg'

const tradeGroup={
    groupID:'1',
    groupName: 'BUY / SELL / TRADE',
    groupBgcPhotoThumbnail: buySellTradeSmall,
    groupBgcPhotoFull:buySellTradeFull,
    postsNo:0
}

const footballGroup={
    groupID:'2',
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
            return {...state,
                footballHighlights:action.highlight,
                footballHighlightsFlag:true}

        case('GET_PRODUCTS'):
  console.log(action)

            return {...state,
            shopItems:action.products[Math.floor(Math.random()*15)],
            shopItemsFlag:true
        }
        case('ADD_GROUP_POST'):
        console.log(action.post)
            if(action.groupId==='1'){
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    tradePosts: [action.post,...state.tradePosts],
                    }
                } else if(action.groupId==='2'){
                return {...state,
                    groups:[tradeGroup,footballGroup],
                    footballPosts: [action.post,...state.footballPosts],
                }
                } 
            else return state
        case('SET_SEEN_STATUS'):
            if(action.groupId==='1'){
                return{...state,
                    tradePosts: state.tradePosts.map((element)=>{return {...element, seenByUser:true}}),               
                }
            }
            if(action.groupId==='2'){
                return{...state,
                    footballPosts: state.footballPosts.map((element)=>{return {...element, seenByUser:true}}),               
                }
             }
            return currentState

                
        default:
            return state
            }
 
    }
 export default groupsReducer