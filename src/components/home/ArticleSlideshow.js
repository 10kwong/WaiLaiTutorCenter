import React, { useState } from 'react';
import Article from './Article';

import './styles.css'; // path to the CSS file
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"; // Left, right arrows imported

const ArticleSlideshow = ({ articles }) => {
   const [current, setCurrent] = useState(0);
   const length = articles.length;

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   }
   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   }

   React.useEffect(() => {
      let slider = setInterval(nextSlide, 3000);
      return () => clearInterval(slider);
   }, [current]);

   if (!Array.isArray(articles) || length <= 0) {
      console.log('ERROR: Articles not found');
      return null;
   }

   return (
      <section className='slideshow-content'>
         <AiFillCaretLeft className='left-arrow arrow' onClick={prevSlide} />
         <AiFillCaretRight className='right-arrow arrow' onClick={nextSlide} />
         {articles.map((article, index) => (
            <Article
               key={index}
               title={article.title}
               description={article.description}
               image={article.image}
               link={article.link}
               visible={current === index}
            />
         ))}
         <div className="slideshow-dots-container">
         {articles.map((_, index) => (
            <span
               key={index}
               className={`slideshow-dot ${current === index ? "dot-active" : ""}`}
               onClick={() => {setCurrent(index);}}
            />
         ))}
         </div>
      </section>
   );
}
export default ArticleSlideshow;