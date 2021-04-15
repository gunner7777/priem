import React from 'react';
import Typography from '../lib/Typography';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer Text_Center'>
      <Typography
        variant='text'
        tag='p'>
        &copy; ФГБОУ ВО Вятский ГАТУ
      </Typography>
    </div>
  )
}

export default Footer;