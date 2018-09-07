import { combineReducers } from 'redux';
import { docs } from './docs';
import { sveden } from './sveden';
import { exam } from './exam';
import { konkurs } from './konkurs';
import { enrolled } from './enrolled';
import { select } from './select';
import { menu } from './menu';
import { viewer } from './viewer';

const rootReducer = combineReducers({
  docs: docs,
  sveden: sveden,
  exam: exam,
  konkurs: konkurs,
  enrolled: enrolled,
  select: select,
  menu: menu,
  viewer: viewer,
});

export default rootReducer;