import React from 'react';
import './whatGPT3.css';
import {Feature} from '../../components/export'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, the Generative Pre-trained Transformer 3, stands at the forefront of language models with its impressive 175 billion parameters. Trained on diverse internet data, it excels in understanding language nuances and context. "/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Exploring the Horizon: Unleashing Potential with ChatGPT</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text=" is an advanced chatbot designed to engage in natural and contextually relevant conversations with users. It belongs to the family of conversational AI models that utilize large-scale neural networks." />
      <Feature title="Knowledgebase" text="GPT-3 itself does not have a fixed or predefined knowledge base. Unlike some other AI systems that rely on structured databases, GPT-3 is a language model that generates human-like text based on patterns it has learned during training on a diverse range of internet text." />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
}

export default WhatGPT3
