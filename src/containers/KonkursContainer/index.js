import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {
  getKonkursList,
  setKonkursList,
  getFaksList,
  getEduFormsList,
  getBase,
  resetToDefault
} from '../../actions/konkursActions';
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


class KonkursContainer extends Component {
  constructor() {
    super();

    this.chooseGrad = this.chooseGrad.bind(this);
    this.chooseFac = this.chooseFac.bind(this);
    this.chooseForm = this.chooseForm.bind(this);
    this.chooseList = this.chooseList.bind(this);
    this.searchKonkursList = this.searchKonkursList.bind(this);
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
    this.props.setKonkursList(e.currentTarget.innerHTML);
    this.props.setTargetSelect(e.currentTarget.id);
  }

  searchKonkursList() {
    this.props.fetchData({
      id: "konkurs",
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
          Конкурсные ранжированные списки
        </Typography>
        <Select
          label="Уровень образования"
          options={grad}
          changeValue={this.chooseGrad}
          id="konkursLevelEdu"
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
              id="konkursFacEdu"
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
              id="konkursFormaEdu"
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
              id="konkursBaseEdu"
              showTargets={this.showTargets}
              isHide={this.props.select.onTarget}
              currId={this.props.select.prevTargetId}
            />
        }

        {
          this.props.currList !== "" &&
            <Button
              handleClick={this.searchKonkursList}
            >
              Найти
            </Button>
        }

        {
          this.props.isLoading && <Loader />
        }

        { this.props.konkurs.docs !== undefined && this.props.konkurs.docs.length > 0 &&
            <InfoList
              key={shortid.generate()}
              list={this.props.konkurs}
              version={random}
            />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.konkurs.isLoading,
    graduation: state.konkurs.grad,
    currFacs: state.konkurs.currFacs,
    currForms: state.konkurs.currForms,
    currBase: state.konkurs.currBase,
    currList: state.konkurs.currList,
    konkurs: state.konkurs.konkurs,
    select: state.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (filename) => dispatch(getKonkursList(filename)),
    getFaksList: (grad) => dispatch(getFaksList(grad)),
    getEduFormsList: (fac) => dispatch(getEduFormsList(fac)),
    getBase: (form) => dispatch(getBase(form)),
    setKonkursList: (base) => dispatch(setKonkursList(base)),
    setTargetSelect: (id) => dispatch(setTargetSelect(id)),
    getTargetsSelect: (id) => dispatch(getTargetsSelect(id)),
    resetToDefault: (bool) => dispatch(resetToDefault(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonkursContainer);