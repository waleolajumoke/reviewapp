import {useContext} from 'react'
import {ReviewContext }from '../ReviewContext'

const ReviewItem = ({item}) => {

  const {deleteReview} = useContext(ReviewContext)

  return (
    <div className="card">
     
      <h6>{item.title}</h6>
      <p>{item.body}</p>
      <h6>{item.userId}</h6>
      <button onClick={()=>deleteReview(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default ReviewItem