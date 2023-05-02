import React from 'react';
import './SideNav.css';

import { BsFillRecordCircleFill, BsFillCircleFill } from "react-icons/bs";

const SideNav = ({ article_name, sections }) => {
  return (
    <nav className='side-guide'>
      <ul className='sidenav-menu'>
        {sections.map((section) => (
          <li key={section.id} className='sidenav-menu-item'>
            <BsFillCircleFill className='sidenav-icon hidden' />
            <BsFillRecordCircleFill className='sidenav-icon active' />
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
      <h1 className='article-name'>{ article_name }</h1>
    </nav>
  );
};

export default SideNav;