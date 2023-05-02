import React from 'react';

import './Footer.css';
import { AiOutlineWechat, AiOutlineFacebook, AiOutlineInstagram, AiOutlineGoogle, AiOutlineMail, AiOutlinePhone, AiFillPushpin} from "react-icons/ai";

function Footer({ companyName, copyrightYear, creatorName, qrcode }) {
  return (
    <footer className="footer-content">
        <div className="footer-contact">
            <div className="footer-contact-description">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="footer-contact-item-container">
            <ul>
                 <li>
                     <a href={qrcode} className='footer-contact-item' target='_blank'>
                        <AiOutlineWechat className='footer-contact-item-icon' />
                       <span className='footer-contact-item-description'>WeChat</span>
                     </a>
                 </li>
                 <li>
                     <a href="https://www.facebook.com/search/top/?q=%E6%BE%B3%E9%96%80%20%E7%9D%A3%E8%AA%B2" className='footer-contact-item'>
                        <AiOutlineFacebook className='footer-contact-item-icon' target='_blank'/>
                       <span className='footer-contact-item-description'>FaceBook</span>
                     </a>
                 </li>
                 <li>
                     <a href="https://www.instagram.com/pooh/" className='footer-contact-item' target='_blank'>
                     <AiOutlineInstagram className='footer-contact-item-icon' />
                     <span className='footer-contact-item-description'>Instagram</span>
                     </a>
                 </li>
                 <li>
                     <a href="https://www.google.com/search?q=%E6%BE%B3%E9%96%80+%E5%B0%8F%E7%B6%AD%E5%B0%BC%E7%9D%A3%E8%AA%B2%E4%B8%AD%E5%BF%83&rlz=1C5CHFA_enMO907MO907&sxsrf=APwXEdcgLHnE6CYK4p1uenlD6hFzVmM09Q%3A1682665936936&ei=0HFLZMPpOJKS-Ab2hZWQCQ&ved=0ahUKEwjDkcmLg8z-AhUSCd4KHfZCBZIQ4dUDCA8&uact=5&oq=%E6%BE%B3%E9%96%80+%E5%B0%8F%E7%B6%AD%E5%B0%BC%E7%9D%A3%E8%AA%B2%E4%B8%AD%E5%BF%83&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQogQQsAMyCAgAEKIEELADMggIABCiBBCwAzIICAAQogQQsANKBAhBGAFQ9wFYlARgkgVoAXAAeACAAQCIAQCSAQCYAQCgAQGgAQLIAQTAAQE&sclient=gws-wiz-serp" className='footer-contact-item' target='_blank'>
                     <AiOutlineGoogle className='footer-contact-item-icon' />
                     <span className='footer-contact-item-description'>Google</span>
                     </a>
                 </li>
            </ul>
         </div>
      </div>
      <div className="footer-middle">
        <div className="footer-col">
          <h4 className='col-header'>{companyName}</h4>
          <ul className='col-items-content'>
            <li id='qrcode'><img src={qrcode} id='qrcode'/>QR Code</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className='col-header'>服務</h4>
          <ul className='col-items-content'>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className='col-header'>有用連結</h4>
          <ul className='col-items-content'>
            <li>FAQ</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className='col-header'>聯繫方式</h4>
          <ul className='col-items-content'>
            <li>
              <a href="mailto:b09705041@ntu.edu.tw" target="_blank" className='contact-item-wrapper'>
                <AiOutlineMail />b09705041@ntu.edu.tw
              </a>
            </li>
            <li>
              <a href="tel:66665055" className='contact-item-wrapper'>
                <AiOutlinePhone />(853) 6666 5055
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/澳門觀音堂街75號/@22.2057313,113.5507452,17z/data=!3m1!4b1!4m6!3m5!1s0x34017b20463112fb:0x5ede421b5bca8f9e!8m2!3d22.2057313!4d113.5507452!16s%2Fg%2F11tg3vh55h" target="_blank" className='contact-item-wrapper'>
                <AiFillPushpin />澳門觀音堂街 41 號新益花園(第六座)地下
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/澳門觀音堂街75號/@22.2057313,113.5507452,17z/data=!3m1!4b1!4m6!3m5!1s0x34017b20463112fb:0x5ede421b5bca8f9e!8m2!3d22.2057313!4d113.5507452!16s%2Fg%2F11tg3vh55h" target="_blank" className='contact-item-wrapper'>
                <AiFillPushpin />No.41, R. de Kun Iam Tong, Macao
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credit">
          <span className='credit-content'>
            &copy; {copyrightYear} {companyName}. All rights reserved. <br />Powered by {creatorName}
          </span>
      </div>
    </footer>
  );
}

export default Footer;
