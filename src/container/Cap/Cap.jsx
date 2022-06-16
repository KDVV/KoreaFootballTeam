import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Cap.css';

const Cap = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.Cap} alt="Cap" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Captain" />
      <h1 className='headtext__cormorant'>Son Heung-min</h1>

      <div className='app__cap-content'>
        <div className='app__cap-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>대한민국 국적의 토트넘 홋스퍼 FC 소속 축구선수.
           주 포지션은 윙어이며, 현재 대한민국 축구 국가대표팀 주장을 맡고 있다.</p>
        </div>
        <p className='p__opensans'>프리미어 리그와 UEFA 챔피언스 리그 아시아 선수 역대 최다 득점자이자
          최초로 발롱도르 후보 30인과 FIFA FIFPro 월드 XI 후보 55인에 선정됐다. 
          또한 FIFA 푸스카스상을 수상했으며, 프리미어 리그 이달의 선수에 3회 선정되었고,
          아시아 선수 최초로 PFA 올해의 팀 선정 및 프리미어 리그 득점왕을 수상했다.</p>
      </div>

      <div className='app__cap-sign'>
        <p>Son Heung-min</p>
        <p className='p__opensans'>Korea Captain</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>

  </div>
);

export default Cap;
