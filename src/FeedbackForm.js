import React from 'react'
import Button from './shared/Button'
import { useState } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleTextChange = (e) => {
    
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('text must be at least 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)     

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

  return (
    <div>
      <Card>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            how would you rate your service with us?</label>
          <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
          <input onChange={handleTextChange} value={text} type="text" name="name" />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>send</Button>
         
         {message && <div className='message'>{message}</div>}
          </div>
           
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
