import React from 'react';

import { MenuItem } from '../../components';
import { images, data } from '../../constants';
import './Squard.css';

const Squard = () => (
  <div className='app__squard flex__center section__padding' id="squard">
    <div className='app__squard-title'>
      <p className='p__cormorant'>Korea Football Team</p>
      {/* <SubHeading title="Korea Football Team" /> */}
      <h1 className='headtext__cormorant'>squard</h1>
    </div>

    <div className='app__squard-menu'>
      <div className='app__squard-menu_lineup flex__center'>
        <p className='app__squard-menu_heading'>명단</p>
        <div className='app__squard_menu_items'>
          {data.lineups.map((lineup, index) => (
            <MenuItem key={lineup.name + index} name={lineup.name} position={lineup.position} team={lineup.team} />
          ))}
        </div>
      </div>

      <div className='app__squard-menu_img'>
        <img src={images.poster} alt="squard-img" />
      </div>

      <div className='app__squard-menu_lineup1 flex__center'>
        <p className='app__squard-menu_heading'>명단</p>
        <div className='app__squard_menu_items'>
          {data.lineups1.map((lineup, index) => (
            <MenuItem key={lineup.name + index} name={lineup.name} position={lineup.position} team={lineup.team} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default Squard;
