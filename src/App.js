import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkTargetIsSelect } from './actions/selectActions';
import { toggleMenu } from './actions/menuActions';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentNavigator from './components/ContentNavigator';
import Navigation from './components/Navigation';
import { menuItems } from './constants/config';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleClick(e) {
    this.props.checkTargetIsSelect(e.target.id);
  }

  toggleNav() {
    this.props.toggleMenu(!this.props.menu.isShow);
  }

  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <Header
          handleClick={this.toggleNav}
          showMenu={!this.props.menu.isShow}
        />
        <div className="Content">
          <Navigation
            forMenu={menuItems}
            showMenu={!this.props.menu.isShow}
            />
          <ContentNavigator />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkTargetIsSelect: (id) => dispatch(checkTargetIsSelect(id)),
    toggleMenu: (bool) => dispatch(toggleMenu(bool))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));