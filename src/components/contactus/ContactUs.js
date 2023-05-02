import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillPushpin } from "react-icons/ai";
import './ContactUs.css';
import NewsletterSubscription from './ConfirmationMessage';

import Footer from '../footer/Footer';
import qrcode from '../footer/src/qrcode.png';

function ContactUs() {
  const companyName = <>Wai Lai 維尼督課中心</>,
    copyrightYear = <>2023</>,
    creatorName = <>Oscar Wong</>;
  
  return (
    <>
    <section className='contactus-container'>
      <div className='contactus-content'>
        <div className='contact-header'>
          <AiOutlinePhone /><h1>聯繫方式</h1>
        </div>
        <div className='contact-content'>
          <a href="mailto:b09705041@ntu.edu.tw" target="_blank" className='contact-content-items'>
            <AiOutlineMail /><span>b09705041@ntu.edu.tw</span>
          </a>
          <a href="tel:66665055" className='contact-content-items' className='contact-content-items'>
            <AiOutlinePhone className='contact-content-items'/><span>(853) 6666 5055</span>
          </a>
          <a href="https://www.google.com/maps/place/澳門觀音堂街75號/@22.2057313,113.5507452,17z/data=!3m1!4b1!4m6!3m5!1s0x34017b20463112fb:0x5ede421b5bca8f9e!8m2!3d22.2057313!4d113.5507452!16s%2Fg%2F11tg3vh55h" target="_blank" className='contact-content-items'>
            <AiFillPushpin /><span>澳門觀音堂街 41 號新益花園(第六座)地下</span>
          </a>
          <a href="https://www.google.com/maps/place/澳門觀音堂街75號/@22.2057313,113.5507452,17z/data=!3m1!4b1!4m6!3m5!1s0x34017b20463112fb:0x5ede421b5bca8f9e!8m2!3d22.2057313!4d113.5507452!16s%2Fg%2F11tg3vh55h" target="_blank" className='contact-content-items'>
            <AiFillPushpin /><span>No.41, R. de Kun Iam Tong, Macao</span>
          </a>
        </div>
      </div>
      <div className='contactus-content'>
        <div className='contact-content-items media'>
          <span>中心 Google 位置</span>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.904606142242!2d113.5507452!3d22.2057313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017b20463112fb%3A0x5ede421b5bca8f9e!2z5r6z6ZaA6KeA6Z-z5aCC6KGXNzXomZ8!5e0!3m2!1szh-TW!2stw!4v1678700197076!5m2!1szh-TW!2stw" className='media'/>
        </div>
      </div>
      <div className='contactus-newslettersignup'>
        <NewsletterSubscription />
      </div>
    </section>
    <Footer companyName={companyName} copyrightYear={copyrightYear} creatorName={creatorName} qrcode={qrcode}/>
    </>
  )
}

export default ContactUs;