
export const Comment=(props)=>{
const {person, comment} = props
    return(<div className='comment'>
        <div className='commentHeader'>
        <img src={person.picture?.thumbnail} alt={person.name.first + `'s profile picture`} />
        <p>{person.name.first+' '+person.name.last}</p> 
        </div>
        <div className='commentText'>{comment}</div>
        </div>
    )

}