import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {

  return (
    <div className='gpt3__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Discover The OpenAI's GPT-3</h1>
        <p>Welcome to our innovative world where conversation meets intelligence! Explore the power of ChatGPT, an advanced language model designed to engage and assist you effortlessly.</p>
        
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Adress' />
          <button type='button'> <a href="https://openai.com/about"> Get Started</a></button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
      
    </div>
  )
}

export default Header