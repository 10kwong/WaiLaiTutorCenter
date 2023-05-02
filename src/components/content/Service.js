import React from 'react'
import ServiceData from './ServiceData';
import SideNav from '../sidenav/SideNav';
import './styles.css';

function Service() {
  return (
    <div className='wrapper'>
      <div className='content-container'>
        {ServiceData.map((data) => (
          <div className='content-items' id={ data.id }>
            <h1>{ data.title }</h1>
              {data.content}
          </div>
        ))}
      </div>
      <SideNav article_name={ '課程服務' } sections={ ServiceData }/>
    </div>
  )
}

export default Service;