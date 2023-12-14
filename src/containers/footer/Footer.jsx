import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Do you want to embark on this journey</h1>
        </div>

        <div className='gpt3__footer-btn'>
        <p><button> <a href="https://chat.openai.com/"> Request Early Acces</a></button></p>
        </div>

        <div className='gpt3__footer-links'>
          
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt="logo" />
            <p style={{margin: '1rem 0'}}>Da3bes Co, <br />All Rights Reserved</p>
          </div>
          
          <div className='gpt__footer-links_div'>
            <h4>Links</h4>
            <p style={{margin: '1.5rem 0'}}>Social Media</p>
            <p style={{margin: '1rem 0'}}>Related Infos</p>
            <p style={{margin: '1rem 0'}}>Articles</p>
            <p style={{margin: '1rem 0'}}>OpenAi</p>
          </div>
          
          <div className='gpt__footer-links_div'>
            <h4>Legal Info</h4>
            <p style={{margin: '1.5rem 0'}}>Termes & Conditions</p>
            <p style={{margin: '1rem 0'}}>Privacy Policy</p>
            <p style={{margin: '1rem 0'}}>Contract</p>
          </div>
          
          <div className='gpt__footer-links_div'>
            <h4>Get In Touch</h4>
            <p style={{margin: '1.5rem 0'}}>Sfax 3013, Tunisia</p>
            <p style={{margin: '1rem 0'}}>+216 28 388 104 ,+216 25 818 718</p>
            <p style={{margin: '1rem 0'}}>azizissawi1@gmail.com</p>

          </div>

          <div className='gpt3__footer-copyright'>
              <p> @2023 GPT-3. All rights reserved.</p>
          </div>
        
        </div>
    </div>
  )
}

export default Footer;