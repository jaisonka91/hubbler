import { combineReducers } from 'redux';
import { tableData } from './reducers/tableData';

const allReducers = combineReducers({
  tableData
});

export default allReducers;
