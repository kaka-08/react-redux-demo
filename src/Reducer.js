import { combineReducers } from "redux";

import {reducer as todoReducer} from './todo';
import {reducer as filterReducer} from './filter';

//把分reducer合并为一个总的reducer
const reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer
});

export default reducer;