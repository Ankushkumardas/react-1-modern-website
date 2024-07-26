import React from 'react'
import './whatgpt.css'
import Feature from '../../components/feature/Feature'
function Whatgpt() {
  return (
    <div className='gpt-w section-padding' id='whpt3'>
      <div className='gpt-w-feature'>
        <Feature title='What is GPT-3' text='GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.'/>
      </div>
      <div className='gpt-w-heading'>
        <h1 className='gradient-text'>The possibilities are beyound your imagination</h1>
        <p className='gradient-text'>Explore Library</p>
      </div>
      <div className='gpt-w-container'>
          <Feature title='ChatBots' text='At the most basic level, a chatbot is a computer program that simulates and processes human conversation, allowing humans to interact with digital devices as if they were communicating with a real person.'/>
          <Feature title='KnowledgeBase' text='A knowledge base is a self-serve online library of information about a product, service, department, or topic. The data in your knowledge base can come from anywhere.'/>
          <Feature title='Education' text='Education socializes children into society by instilling cultural values and norms, equipping them with the skills necessary to become productive members of society'/>
      </div>
    </div>
  )
}

export default Whatgpt
