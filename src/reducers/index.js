import { combineReducers } from 'redux';
import notes from './notes';
import nextId from './nextId';
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers({
  notes,
  nextId
});

export default rootReducer;
