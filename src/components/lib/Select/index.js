import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import SelectItems from './SelectItems';
import './Select.css';
import './Select.media.css';

class Select extends Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
      selectValue: 'Выберите',
      target: ''
    };

    this.showVariants = this.showVariants.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if((prevState.showItems !== nextProps.isHide) && (nextProps.id === prevState.target)) {
      return {
        showItems: nextProps.notHide
      }
    }
  }

  showVariants(e) {
    if(this.props.id === e.target.id) {
      this.setState({
        showItems: !this.state.showItems
      });
    }
    this.props.showTargets(e.target.id);
  }

  getItem(e) {
    this.props.changeValue(e);
    if(this.props.id === e.target.id) {
      this.setState({
        showItems: !this.state.showItems,
        selectValue: e.currentTarget.innerHTML
      });
    }
  }

  componentDidMount() {
    this.setState({
      selectValue: this.props.label,
      target: this.props.id
    });
  }

  render() {
    return (
      <div
        className='Select Text_Center'>
        <CSSTransition
          in={!this.state.showItems}
          timeout={150}
          classNames='selectAnimate'
          unmountOnExit
        >
        <div
          id={this.props.id}
          className='Select-Choosen'
          onClick={this.showVariants}
        >
          {this.state.selectValue}
        </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.showItems}
          timeout={150}
          classNames='selectAnimate'
          unmountOnExit
        >
          <SelectItems
            handleClick={this.getItem}
            items={this.props.options}
            idSelect={this.props.id}
          />
        </CSSTransition>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  showTargets: PropTypes.func.isRequired,
  currId: PropTypes.string.isRequired,
  isHide: PropTypes.bool.isRequired
}

export default Select;