import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {
  getEnrolledList,
  setEnrolledList,
  getFaksList,
  getEduFormsList,
  getBase,
  resetToDefault
} from '../../actions/enrolledActions';
import {
  setTargetSelect,
  getTargetsSelect
 } from '../../actions/selectActions';
import Loader from '../../components/lib/Loader';
import { randomVersion } from '../../util/vers-random';
import InfoList from '../../components/InfoList';
import Select from '../../components/lib/Select';
import Button from '../../components/lib/Button';
import Typography from '../../components/lib/Typography';

class EnrolledContainer extends Component {
  constructor() {
    super();

    this.chooseGrad = this.chooseGrad.bind(this);
    this.chooseFac = this.chooseFac.bind(this);
    this.chooseForm = this.chooseForm.bind(this);
    this.chooseList = this.chooseList.bind(this);
    this.searchEnrolledList = this.searchEnrolledList.bind(this);
    this.showTargets = this.showTargets.bind(this);
  }

  componentDidMount() {
    this.props.resetToDefault(true);
  }

  chooseGrad(e) {
    this.props.getFaksList(e.currentTarget.innerHTML);
    this.props.setTargetSelect(e.currentTarget.id);
  }

  chooseFac(e) {
    this.props.getEduFormsList(e.currentTarget.innerHTML);
    this.props.setTargetSelect(e.currentTarget.id);
  }

  chooseForm(e) {
    this.props.getBase(e.currentTarget.innerHTML);
    this.props.setTargetSelect(e.currentTarget.id);
  }

  chooseList(e) {
    this.props.setEnrolledList(e.currentTarget.innerHTML);
    this.props.setTargetSelect(e.currentTarget.id);
  }

  searchEnrolledList() {
    this.props.fetchData({
      id: "enrolled",
      filename: this.props.currList
    });
  }

  showTargets(id) {
    this.props.getTargetsSelect(id);
  }

  render() {
    const grad = this.props.graduation;

    let random = randomVersion();
    return (
      <div>
        <Typography
          variant="title"
          tag="h3" >
          Списки зачисленных
        </Typography>
        <Select
          label="Уровень образования"
          options={grad}
          changeValue={this.chooseGrad}
          id="enrolledLevelEdu"
          showTargets={this.showTargets}
          isHide={this.props.select.onTarget}
          currId={this.props.select.prevTargetId}
        />

        {
          this.props.currFacs !== undefined && this.props.currFacs.length > 0 &&
            <Select
              label="Факультет"
              options={this.props.currFacs}
              changeValue={this.chooseFac}
              id="enrolledFacEdu"
              showTargets={this.showTargets}
              isHide={this.props.select.onTarget}
              currId={this.props.select.prevTargetId}
            />
        }

        {
          this.props.currForms !== undefined && this.props.currForms.length > 0 &&
            <Select
              label="Форма обучения"
              options={this.props.currForms}
              changeValue={this.chooseForm}
              id="enrolledFormaEdu"
              showTargets={this.showTargets}
              isHide={this.props.select.onTarget}
              currId={this.props.select.prevTargetId}
            />
        }

        {
          this.props.currBase !== undefined && this.props.currBase.length > 0 &&
            <Select
              label="Основа"
              options={this.props.currBase}
              changeValue={this.chooseList}
              id="enrolledBaseEdu"
              showTargets={this.showTargets}
              isHide={this.props.select.onTarget}
              currId={this.props.select.prevTargetId}
            />
        }

        {
          this.props.currList !== "" &&
            <Button
              handleClick={this.searchEnrolledList}
            >
              Найти
            </Button>
        }

        {
          this.props.isLoading && <Loader />
        }

        {
          this.props.enrolled.docs !== undefined && this.props.enrolled.docs.length > 0 &&
            <InfoList
              key={shortid.generate()}
              list={this.props.enrolled}
              version={random}
            />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.enrolled.isLoading,
    graduation: state.enrolled.grad,
    currFacs: state.enrolled.currFacs,
    currForms: state.enrolled.currForms,
    currBase: state.enrolled.currBase,
    currList: state.enrolled.currList,
    enrolled: state.enrolled.enrolled,
    select: state.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (filename) => dispatch(getEnrolledList(filename)),
    getFaksList: (grad) => dispatch(getFaksList(grad)),
    getEduFormsList: (fac) => dispatch(getEduFormsList(fac)),
    getBase: (form) => dispatch(getBase(form)),
    setEnrolledList: (base) => dispatch(setEnrolledList(base)),
    setTargetSelect: (id) => dispatch(setTargetSelect(id)),
    getTargetsSelect: (id) => dispatch(getTargetsSelect(id)),
    resetToDefault: (bool) => dispatch(resetToDefault(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnrolledContainer);