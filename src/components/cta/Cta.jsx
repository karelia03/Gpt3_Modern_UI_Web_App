import React from 'react'
import './cta.css';

const Cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p> Start chatting, start innovating!</p>
        <h3>Enlist today and dive into a world of limitless potential.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button'> <a href="https://platform.openai.com/docs/overview"> Get Started </a></button>
      </div>
      
    </div>
  )
}

export default Cta