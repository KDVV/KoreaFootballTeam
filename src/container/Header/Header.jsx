import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Korea Football Team" />
      <h1 className='app__header-h1'>Korea Republic</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        대한축구협회 산하의 대한민국 남자 축구 국가대표팀이다. 아시아에서 손꼽히는 강팀 중 하나로 평가받고 있다.
        별명은 태극전사와 아시아의 호랑이, 마스코트는 하얀 호랑이 백호, 유니폼 스폰서는 나이키이다.</p>
      <button type="button" className='custom__button'>Explore</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.flag} alt="header img" />
    </div>
  </div>
);

export default Header;
