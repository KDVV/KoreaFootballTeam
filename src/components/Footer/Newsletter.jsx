import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'>Korea Football Association</h1>
      <p className='p__opensans'>KFA 소개</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter Your e-mail address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
