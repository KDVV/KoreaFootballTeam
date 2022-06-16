import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>서울특별시 종로구 경희궁길 46 축구회관</p>
        <p className='p__opensans'>대표 전화 02. 2002. 0707</p>
        <p className='p__opensans'>대표 팩스 02. 2002. 0611</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.kfa1} alt="footer_kfa" />
        <p className='p__opensans'>태극기에 들어간 레드, 블루, 블랙, 화이트를 주요 색상으로 사용하되, 레드와 블루 컬러에는 현대미가 가미됐다. 각각은 역동성과 신뢰감, 용맹함과 진취성, 페어플레이를 상징한다. 사각 프레임은 그라운드를 형상화 했다.</p>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_sponsor'>
        <h1 className='app__footer-headtext'>Sponsor</h1>
        <p className='p__opensans'>Nike, KEB하나은행, KT</p>
        <p className='p__opensans'>SHINSEGAE, KYOBO, HYUNDAI</p>
        <p className='p__opensans'>coupang play, NEXON, CocaCola</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>Copyright ⓒ KFA. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
