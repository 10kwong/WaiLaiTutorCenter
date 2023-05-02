import React from "react";

function Login() {
   return (
      <div className="login">
         <div className="login__content">

         <div className="login__forms">
            <form action="" className="login__registre" id="login-in">
               <h1 className="login__title">登入</h1>
                  
               <div className="login__box">
                  <i className="bx bx-user login__icon"></i>
                  <input type="text" placeholder="用戶名稱" className="login__input" />
               </div>

               <div className="login__box">
                  <i className="bx bx-lock-alt login__icon"></i>
                  <input type="password" placeholder="密碼" className="login__input" />
               </div>
               
               <a href="#" className="login__forgot">忘記密碼?</a>
               <a href="#" className="login__button">登入</a>
               
               <div>
                  <span className="login__account">沒有帳戶?</span>
                  <span className="login__signin" id="sign-up">註冊</span>
               </div>
             </form>
           </div>
         </div>
      </div>
   );
};

export default Login;