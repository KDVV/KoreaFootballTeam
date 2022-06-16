import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Schedule = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Schedule" />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>World Cup Schedule</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>2022 FIFA 카타르 월드컵</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>국가대표팀 월드컵 일정</p>
        <p className='p__opensans'>2022. 11. 24 오후 10:00 우루과이 vs 대한민국</p>
        <p className='p__opensans'>2022. 11. 28 오후 10:00 대한민국 vs 가나</p>
        <p className='p__opensans'>2022. 12. 3 오전 00:00 대한민국 vs 포르투갈</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Schedule</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.Qatar} alt="Qatar" style={{width:'680px', height:'500px'}} />
    </div>
  </div>
);

export default Schedule;
