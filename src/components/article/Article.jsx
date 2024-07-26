import React from 'react'
import "./article.css"
function Article({image, date,title}) {
  return (
    <>
     <div className='gpt-blog-container-article'>
        <div className='gpt-blog-container-article-img'>
          <img src={image}/>
        </div>
        <div className='gpt-blog-container-article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <div>
            <p>Read Full Article</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default Article
