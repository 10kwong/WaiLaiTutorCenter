import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ConfirmationMessage.css';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubscribe(event) {
    event.preventDefault();
    if (!emailIsValid()) {
      setErrorMessage('*請輸入正確電郵格式');
      return;
    }
    // code to process subscription
    setShowMessage(true);
    setEmail('');
  }

  function emailIsValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="newsletter-container">
      <form onSubmit={handleSubscribe} className='newsletter-form'>
        <label htmlFor="email" className='newsletter-prompt'>訂閱<strong>維尼電子報</strong>以接收最新消息或促銷活動</label>
        <div className='input-container'>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder='  taimingchan@gmail.com'/>
          <button type="submit" className='submitbutton'>訂閱</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      <CSSTransition in={showMessage} classNames="message " timeout={300}>
        <span className={showMessage === true ? 'message-container':'message-container hidden'}>
          感謝您的訂閱！
        </span>
      </CSSTransition>
    </div>
  );
}

export default NewsletterSubscription;
