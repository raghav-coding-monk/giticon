import React from 'react'
import { FaTimes } from 'react-icons/fa'
//import FeedbackData from './data/FeedbackData'
import Card from './shared/Card'

  // const btnHandler = () => {
  //   setIsReversed(!isReversed); 
  // };

const FeedbackItem = ({item, handleDelete}) => {


//  const [feedback, setFeedback]=useState(FeedbackData)
    return (
      
      <Card  >
        
        <div className='num-display'>{item.rating}</div>
        <button className='close'>
            <FaTimes onClick={() => handleDelete(item.id)} color='green' />
        </button>
        <div className='text-display'>{item.text}
            </div>   
      
    </Card>
  
  )
}

export default FeedbackItem
