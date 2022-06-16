import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.K} alt="k letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.korea} alt="about_korea" className='korea__img' />
        <p className='p__opensans'>
          전통적으로 남자 축구 대표팀을 태극전사라고 불렀다.
          물론 축구뿐만 아니라 다른 스포츠 종목에서도 국가대표를 이렇게 호칭하고 있다.
          또한 여자 축구 대표팀도 태극낭자로 불린다.
          근래에는 과거와는 달리 붉은 악마보다는 이 별명으로 많이 지칭하는 편이다.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_koreamap flex__center'>
        <img src={images.koreamap} alt="about_koreamap" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Red Devils</h1>
        <img src={images.korea} alt="about_korea" className='korea__img' />
        <p className='p__opensans'>
          붉은 악마라는 별칭은 1983년 멕시코 세계 청소년 축구 대회에서
          4강 신화를 이룩해 세계를 놀라게 했던 대한민국 청소년 대표 팀을 현지 언론에서
          붉은 악령(Red Furies)이라고 부른 데서 유래했다.
          이걸 번역하는 과정에서 악령이 악마가 되었고 후에 대한민국 축구 국가대표팀의 서포터즈가 결성이 되면서 공식적으로 붉은 악마로 이름을 내걸었다.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
