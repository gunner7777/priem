import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getDocs } from '../../actions/docsActions';
import { viewFile } from '../../actions/viewerActions';
import Loader from '../../components/lib/Loader';
import InfoList from '../../components/InfoList';
import { randomVersion } from '../../util/vers-random';
import Typography from '../../components/lib/Typography';


class DocsContainer extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchData({
      id: 'docs',
      filename: ''
    });
  }

  handleClick(e) {
    const fileInfo = {
      path: e.target.dataset.link,
      name: e.target.innerHTML,
      type: 'application/pdf'
    }

    this.props.viewFile(fileInfo);
  }

  render () {
    if(this.props.isLoading) {
      return <Loader />;
    }

    let random = randomVersion();

    const docsLists = Object.values(this.props.docs).map(item => {
      return (
        <InfoList
          key={shortid.generate()}
          list={item}
          version={random}
          getFileInfo={this.handleClick}
        />
      );
    });

    return (
      <div>
        <Typography
          variant='title'
          tag='h3' >
          Документы приемной комиссии
        </Typography>
        {docsLists}
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
    fetchData: (data) => dispatch(getDocs(data)),
    viewFile: (info) => dispatch(viewFile(info)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsContainer);