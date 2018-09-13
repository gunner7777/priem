import React from 'react';
import Typography from '../lib/Typography';
import Badge from '../lib/Badge';
import shortid from 'shortid';
import { menuItems } from '../../constants/config';
import './Home.css';

const Home = (props) => {
  const badges = menuItems.map(item => {
    console.log(item.path);
    return (
      <Badge
        key={shortid.generate()}
        linkPath={item.link}
        namePath={item.name}
        iconPath={item.icon}
      />
    );
  });
  return (
    <div className='Home'>
      {/*<Typography
        variant='text'
        tag='p'
        modClass='Typography-Text Text_Center'
      >
        Информационный стенд
      </Typography>*/}
      <div className='Flex Flex_JcC'>
        {badges}
      </div>
    </div>
  );
};

export default Home;