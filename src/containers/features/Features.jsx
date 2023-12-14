import React from 'react'
import './features.css';
import { Feature } from '../../components/export';

const featuresData =[
  {
    title:'Natural Language Understanding ',
    text:'Users can interact with the model using everyday language, making the conversation feel more intuitive.'
  },
  {
    title:'Context Retention',
    text:'The model is capable of providing responses that are contextually relevant and coherent within the ongoing dialogue.'
  }, 
  {
    title:'Versatility Across Domains',
    text:"It doesn't require task-specific training and can generate responses across a wide range of topics and domains. "
  }, 
  {
    title:'Generative Responses',
    text:'Instead of relying on predefined responses or specific databases, itgenerates responses on-the-fly based on the patterns and information it has learned during its extensive training on diverse internet text. '
  }
]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading' id='features'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Embrace the possibilities, shape your tomorrow.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features