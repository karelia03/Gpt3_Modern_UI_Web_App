import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/export2';
import { Cta, Brand, Navbar } from './components/export';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
          <Header />
      </div>
      <div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <Cta />
          <Blog /> 
          <Footer />

      </div>
    </div>
  )
}

export default App
