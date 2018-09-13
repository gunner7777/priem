import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Viewer from '../../components/Viewer';

class ViewerContainer extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    const { path, name } = this.props.fileInfo.fileInfo;
    return (
      <div>
        <Viewer
          path={path}
          name={name}
          goBack={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fileInfo: state.viewer,
  }
};

export default withRouter(connect(mapStateToProps, null)(ViewerContainer));