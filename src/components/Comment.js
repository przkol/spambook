import { StyledComment } from "./styled/Comment.styled"

export const Comment=(props)=>{
const {person, comment} = props
    return(<StyledComment className='comment'>
        <div className='commentHeader'>
        <img src={person?.picture?.thumbnail} alt={person?.name?.first + `'s profile picture`} />
        <p>{person?.name?.first+' '+person?.name?.last}</p> 
        </div>
        <p className='commentText'>{comment}</p>
        </StyledComment>
    )

}