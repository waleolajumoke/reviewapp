import {useContext} from 'react'
import ReviewItem from './ReviewItem'
import {ReviewContext} from '../ReviewContext'

const ReviewList = () => {

  const {review} = useContext(ReviewContext)

  if(!review || review.length === 0){
    return "Loading..."
  }

  return (
    <div className="card-container">
      {review.map((item) => (
        <ReviewItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ReviewList