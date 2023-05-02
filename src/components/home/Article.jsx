import React from 'react';
import './styles.css'; // path to the CSS file

function Article({ key, title, description, image, link, visible }) {
   return (
      <div className={`article ${visible ? 'visible' : 'hidden'}`}>
         <div className="article-content">
            <h1 className="article-title" key={key}>
               {title}
            </h1>
            <p className="article-description">
               {description}
            </p>
            <button className="article-button">
               <a href={link}>閱讀更多</a>
            </button>
         </div>
         <img className='article-image' src={image} alt={`articleimage-${key}`} />
      </div>
   )
}

export default Article;