import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import Typography from '../lib/Typography';
import './Header.css';

const Header = (props) => {
  const icon = !props.showMenu ? faBars : faArrowLeft;
  return (
    <div className='Header Flex Flex-JcFs Flex_AiC'>
      <div className='Header-MenuOuter'>
        <CSSTransition
          in={props.showMenu}
          timeout={250}
          classNames='IconAnimate'
          //unmountOnExit
        >
          <FontAwesomeIcon
            icon={icon}
            className='Header-Menu'
            onClick={props.handleClick}
          />
        </CSSTransition>
      </div>
      <div className='Header-Title'>
        <Typography
          variant='title'
          tag='h1'
          modClass='Typography_NoMargin Typography_Header'
        >
          Информационный стенд
        </Typography>
      </div>
      <div className='Header-HomeOuter'>
        <Link
          to='/'>
          <FontAwesomeIcon
            icon={faHome}
            className='Header-Home'
          />
        </Link>
      </div>
    </div>
  )
}

export default Header;