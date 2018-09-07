import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewerContainer extends Component {
  render() {
    return (
      <div>
        11
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    fileInfo: state.viewer.viewer,
  }
};

export default connect(mapStateToProps, null)(ViewerContainer);