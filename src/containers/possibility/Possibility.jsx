import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Dream big, explore the unimaginable</h4>
        <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
        <p>Step into a realm where the possibilities are boundless, extending far beyond the limits of your imagination. In this landscape of endless potential, every dream is a seed waiting to blossom. Embrace the thrill of the unknown, for in that uncertainty lies the extraordinary. Seize the chance to redefine what's possible, and let your imagination soar to new heights.</p>
        <h4>The future is an open canvas, and you hold the brush—paint a masterpiece of your own creation.</h4>
      </div>
    </div>
  )
}

export default Possibility