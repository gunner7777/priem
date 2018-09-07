import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getDocs } from '../../actions/docsActions';
import Loader from '../../components/lib/Loader';
import InfoList from '../../components/InfoList';
import { randomVersion } from '../../util/vers-random';
import Typography from '../../components/lib/Typography';

class DocsContainer extends Component {
  componentDidMount() {
    this.props.fetchData({
      id: "docs",
      filename: ""
    });
  }

  render () {
    if(this.props.isLoading) {
      return <Loader />;
    }

    const { vo, spo } = this.props.docs;
    let random = randomVersion();

    return (
      <div>
        <Typography
          variant="title"
          tag="h3" >
          Документы приемной комиссии
        </Typography>
        <InfoList
          key={shortid.generate()}
          list={vo}
          version={random}
        />
        <InfoList
          key={shortid.generate()}
          list={spo}
          version={random}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.docs.isLoading,
    docs: state.docs.docs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => dispatch(getDocs(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsContainer);