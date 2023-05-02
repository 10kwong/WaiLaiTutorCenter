import './styles.css';

export const ServiceData = [
   {
      id: 'services',
      title: '服務內容',
      content:
      <>
         <p>中心在平日上課日提供多項貼心的服務，包括接送、專業導師督課、溫習和課後拓兒服務。此外，中心還提供美味的午膳和下午茶，確保學生在學習和生活上都能得到足夠的營養和能量。</p>
      </>
   },
   {
      id: 'clientele',
      title: '服務對象',
      content:
      <>
         <p>維尼督課中心主要為年齡介於3至14歲的幼稚園和小學學生提供專業的補習服務，近年還開始為初中開設課程。</p>
      </>
   },
   {
      id: 'mission',
      title: '教學理念',
      content:
      <>
         <p>小維尼督課中心的教學理念是"學生為本、以學生為中心"，我們尊重每位學生的個性和特點，以他們的需求和興趣為出發點，為他們提供最適合的教學方式和輔導，讓他們在輕鬆、愉快的學習氛圍中快樂成長。我們也非常注重學生的全面發展，除了學術成就，還關注學生的品德、身心健康等方面，讓他們成為有道德、有智慧、有擔當的社會棟樑。</p>
      </>
   },
   {     
      id: 'opening-hour',
      title: '營業時間',
      content:
      <>
         <table className='openinghr-table-content'>
         <tr>
            <th>日期</th>
            <th>營業時間</th>
         </tr>
         <tr>
            <td>星期一至星期六</td>
            <td>上午九點至晚上八點</td>
         </tr>
         <tr>
            <td>公眾假期</td>
            <td>有限度營業，放假日期依群內公告作準</td>
         </tr>
         </table>
         <p>小維尼督課中心營業時間為平日一至六上午九點至晚上八點，讓家長能夠在工作日放心安排孩子的學習時間。公眾假期中心也會開放，但營業時間會有限度，具體日期會在群組內公告，方便家長提前做好安排。</p>
      </>  
   },
   {
      id: 'charges',
      title: '收費',
      content:
         <>
            <p>小維尼督課中心2023年的收費方案依舊按學校和年級而定。</p>
            <table className='charges-table-content'>
               <thead>
                  <tr className='charges-heade-name'>
                     <th>學校</th>
                     <th>年級</th>
                     <th>月費</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className='charges-row'>
                     <td rowspan="4">聖保祿幼稚園、鏡平和一般學校</td>
                     <td>幼稚園</td>
                     <td>2200元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>小一至小三</td>
                     <td>2500元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>小四至小六</td>
                     <td>3000元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>初中</td>
                     <td>3300元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td rowspan="4">嘉諾撒聖心英文部</td>
                     <td>幼稚園</td>
                     <td>2500元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>小一至小三</td>
                     <td>2800元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>小四至小六</td>
                     <td>3300元</td>
                  </tr>
                  <tr className='charges-row'>
                     <td>初中</td>
                     <td>3600元</td>
                  </tr>
               </tbody>
            </table>
            <p>提示：以上收費為澳門元（ MOP ）。<br />目前聖保祿幼稚園、鏡平和一般學校的幼稚園的收費為每月2200元，小一至小三為每月2500元，小四至小六為每月3000元，而初中為每月3300元。<br />嘉諾撒聖心英文部的每年級則會比聖保祿和鏡平多貴300元。</p>
         </>
   },
   {
      id: 'payment-and-discount',
      title: '收費方式與優惠',
      content:
      <>
         <p>中心提供多種付款方式，包括現金、轉帳、信用卡以及 MPay 電子支付等，讓家長能夠選擇最方便的方式付款。此外，中心也提供方便的網上繳費系統，讓家長可以隨時隨地輕鬆完成繳費程序，免去了排隊等待的困擾。<br />以銀行付款可以選擇每月自動扣費，也可以選擇年繳享受每月100元的優惠。此外，若家長能夠推薦學生來中心學習，中心會以500元現金回饋的方式來答謝家長，讓家長和學生都能夠感受到中心的關愛和用心。</p>
      </>
   }
];
export default ServiceData;