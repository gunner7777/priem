import React from 'react';
import Menu from '../Menu';
import { CSSTransition } from 'react-transition-group';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <CSSTransition
      in={props.showMenu}
      timeout={350}
      classNames='MenuAnimate'
      unmountOnExit
    >
      <nav className='Nav'>
        <Menu items={props.forMenu} />
      </nav>
    </CSSTransition>
  )
}

export default Navigation;