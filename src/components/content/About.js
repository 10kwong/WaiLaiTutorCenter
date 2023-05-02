import React from 'react'
import AboutData from './AboutData';
import SideNav from '../sidenav/SideNav';
import './styles.css';

function About() {
  return (
    <div className='wrapper'>
      <div className='content-container'>
        {AboutData.map((data) => (
          <div className='content-items' id={ data.id }>
            <h1>{ data.title }</h1>
              {data.content}
          </div>
        ))}
      </div>
      <SideNav article_name={ '關於我們' } sections={ AboutData }/>
    </div>
  )
}

export default About;