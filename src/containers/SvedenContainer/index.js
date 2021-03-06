import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getSveden } from '../../actions/svedenActions';
import { viewFile } from '../../actions/viewerActions';
import Loader from '../../components/lib/Loader';
import InfoList from '../../components/InfoList';
import { randomVersion } from '../../util/vers-random';

class SvedenContainer extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchData({
      id: 'sveden',
      filename: ''
    });
  }

  handleClick(e) {
    const fileInfo = {
      path: e.target.dataset.link,
      name: e.target.innerHTML
    }

    this.props.viewFile(fileInfo);
  }

  render () {
    if(this.props.isLoading) {
      return <Loader />;
    }

    let random = randomVersion();

    return (
      <div>
        <InfoList
          key={shortid.generate()}
          list={this.props.sveden}
          version={random}
          getFileInfo={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.sveden.isLoading,
    sveden: state.sveden.sveden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => dispatch(getSveden(data)),
    viewFile: (info) => dispatch(viewFile(info)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SvedenContainer);