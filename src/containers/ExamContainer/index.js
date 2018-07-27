import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getExam } from '../../actions/examActions';
import Loader from '../../components/lib/Loader';
import InfoList from '../../components/InfoList';
import { randomVersion } from '../../util/vers-random';
import Typography from '../../components/lib/Typography';

class ExamContainer extends Component {
  componentDidMount() {
    this.props.fetchData({
      id: "exam",
      filename: ""
    });
  }

  render () {
    if(this.props.isLoading) {
      return <Loader />;
    }

    let random = randomVersion();

    const examList = this.props.exam.examins.map(exam => {
      return (
        <InfoList
          key={shortid.generate()}
          list={exam}
          version={random}
        />
      );
    });

    return (
      <div>
        <Typography
          variant="title"
          tag="h3" >
          {this.props.exam.name}
        </Typography>
        {examList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.exam.isLoading,
    exam: state.exam.exam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => dispatch(getExam(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamContainer);