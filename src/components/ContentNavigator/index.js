import React from 'react';
import { Switch, Route} from 'react-router-dom';
import DocsContainer from '../../containers/DocsContainer';
import SvedenContainer from '../../containers/SvedenContainer';
import ExamContainer from '../../containers/ExamContainer';
import Contacts from '../Contacts';
import Home from '../Home';
import KonkursContainer from '../../containers/KonkursContainer';
import EnrolledContainer from '../../containers/EnrolledContainer';
import Viewer from '../Viewer';
import './ContentNavigator.css';


const ContentNavigator = () => {
  return (
    <div className="ContentNavigator">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/docs' component={ DocsContainer } />
        <Route path='/sveden' component={ SvedenContainer } />
        <Route path='/exam' component={ ExamContainer } />
        <Route path='/konkurs' component={ KonkursContainer } />
        <Route path='/enrolled' component={ EnrolledContainer } />
        <Route path='/contacts' component={ Contacts } />
        <Route path='/viewer' component={ Viewer } />
      </Switch>
    </div>
  )
}

export default ContentNavigator;