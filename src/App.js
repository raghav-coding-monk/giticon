//import logo from './logo.svg';
import './App.css';
import { FaQuestion } from 'react-icons/fa6'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutIconLink from './AboutIconLink';
import Post from './Post';
import {v4 as uuidv4} from 'uuid';
//import {Route } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';
//import FeedbackItem from './FeedbackItem';
import FeedbackList from './FeedbackList';
import Card from './shared/Card';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './FeedbackForm';
//import Card from './shared/Card';
import FeedbackStats from './FeedbackStats';
import AboutPage from './AboutPage';
import NotFound from './NotFound';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

  }
  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
      <>
        
      <Header bgColor="red" textColor="blue" />
      <Routes> 
        <Route exact path='/' element={
          <>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
          </>
        } 
        />
      
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFound />} />
        
      </Routes>
      <AboutIconLink /> 
      </>
  );
}

export default App;
