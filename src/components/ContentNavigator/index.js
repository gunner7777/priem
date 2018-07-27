import React from 'react';
import { Switch, Route} from 'react-router-dom';
import DocsContainer from '../../containers/DocsContainer';
import SvedenContainer from '../../containers/SvedenContainer';
import ExamContainer from '../../containers/ExamContainer';
import Contacts from '../Contacts';
import KonkursContainer from '../../containers/KonkursContainer';
import EnrolledContainer from '../../containers/EnrolledContainer';
import './ContentNavigator.css';

const ContentNavigator = props => {
  return (
    <div className="ContentNavigator">
      <Switch>
        <Route exact path='/' component={DocsContainer} />
        <Route path='/docs' component={DocsContainer} />
        <Route path='/sveden' component={SvedenContainer} />
        <Route path='/exam' component={ExamContainer} />
        <Route path='/konkurs' component={KonkursContainer} />
        <Route path='/enrolled' component={EnrolledContainer} />
        <Route path='/contacts' component={Contacts} />
      </Switch>
    </div>
  )
}

export default ContentNavigator;