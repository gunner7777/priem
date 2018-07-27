import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getSveden } from '../../actions/svedenActions';
import Loader from '../../components/lib/Loader';
import InfoList from '../../components/InfoList';
import { randomVersion } from '../../util/vers-random';

class SvedenContainer extends Component {

  componentDidMount() {
    this.props.fetchData({
      id: "sveden",
      filename: ""
    });
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
    fetchData: (data) => dispatch(getSveden(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SvedenContainer);