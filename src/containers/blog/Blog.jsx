import React from 'react'
import './blog.css'
import Article  from '../../components/article/Article'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'
function Blog() {
  return (
    <div className='gpt-blog  section-padding ' id='blog'>
      <div className='gpt-blog-heading'>
        <h1 className='gradient-text'>A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className='gpt-blog-container'>
          <div className='gpt-blog-container-grpa'>
            <Article image={blog1} date='Sep 26, 2021' title=' GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>
          <div className='gpt-blog-container-grpb' >
          <Article image={blog2} date='Sep 26, 2021' title=' GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article image={blog3} date='Sep 26, 2021' title=' GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article image={blog4} date='Sep 26, 2021' title=' GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article image={blog5} date='Sep 26, 2021' title=' GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>
      </div>
    </div>
  )
}

export default Blog
