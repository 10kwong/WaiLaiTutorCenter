import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // path to the CSS file
import { FaHome } from "react-icons/fa";
import { BsLightningCharge, BsInfoCircle } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

function Header() {
   const [currentAt, setCurrentAt] = useState('home');

   return (
      <header className='nav_wrapper'>
         <Link to='/home' className="nav_logo">
            <BiBookOpen size="35px"/>
            Wai Lai 維尼督課中心
         </Link>

         <nav className='nav_menu'>
            <ul>
               <li>
                  <Link onClick={()=> {setCurrentAt('home')}} to='/home' className={currentAt === 'home' ? 'nav_menu_item active': 'nav_menu_item'}>
                     <FaHome />
                     <span className='nav_menu_item_toggle'>首頁</span>
                  </Link>
               </li>
               <li>
                  <Link onClick={()=> {setCurrentAt('about')}} to="/about" className={currentAt === 'about' ? 'nav_menu_item active': 'nav_menu_item'}>
                     <BsInfoCircle />
                     <span className='nav_menu_item_toggle'>關於我們</span>
                  </Link>
               </li>
               <li>
                  <Link onClick={()=> {setCurrentAt('service')}} to="/service" className={currentAt === 'service' ? 'nav_menu_item active': 'nav_menu_item'}>
                     <BsLightningCharge />
                     <span className='nav_menu_item_toggle'>課程服務</span>
                  </Link>
               </li>
               <li>
                  <Link onClick={()=> {setCurrentAt('contact_us')}} to="contact_us" className={currentAt === 'contact_us' ? 'nav_menu_item active': 'nav_menu_item'}>
                     <AiOutlinePhone />   
                     <span className='nav_menu_item_toggle'>聯絡我們</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;