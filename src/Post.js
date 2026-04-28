import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
//import FeedbackForm from './FeedbackForm'
import FeedbackStats from './FeedbackStats'
const Post = () => {

    const navigate= useNavigate()
    const onClickFn=()=>{
        console.log('heklow')
        navigate('/FeedbackStats')
    }
    const status =200
    if(status===404){
        return <Navigate to='/notfound' />
    }
  return (
    <div>
      post 
      <button onClick={onClickFn}>click </button>
      
    </div>
  )
}

export default Post
