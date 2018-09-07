import React from 'react';
import Typography from '../lib/Typography';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
    <Typography
        variant="text"
        tag="p"
        modClass="Typography-Text"
      >
        Главная страница
      </Typography>
    </div>
  );
};

export default Home;