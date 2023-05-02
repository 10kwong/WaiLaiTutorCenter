import React from 'react';

import ArticleSlideshow from './ArticleSlideshow';
import ArticleData from './ArticleData.js';

import ImageTrack from '../imagetrack/ImageTrack';
import ImageTrackData from '../imagetrack/ImageTrackData';

import Footer from '../footer/Footer';
import qrcode from '../footer/src/qrcode.png';

function Home() {
   const companyName = <>Wai Lai 維尼督課中心</>,
      copyrightYear = <>2023</>,
      creatorName = <>Oscar Wong</>;
   return (
      <div>
         <ArticleSlideshow articles={ArticleData} />
         <ImageTrack header={"精選照片"} images={ImageTrackData} />
         <Footer companyName={companyName} copyrightYear={copyrightYear} creatorName={creatorName} qrcode={qrcode}/>
      </div>
   );
}
export default Home;