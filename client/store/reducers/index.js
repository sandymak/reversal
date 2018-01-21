import { combineReducers } from 'redux';
import arrowInfoReducer from './arrowInfo';
import scoreboardReducer from './scoreboard';
import countDownReducer from './countDown';

const rootReducer = combineReducers({
  arrowInfo: arrowInfoReducer,
  scoreboard: scoreboardReducer,
  countDown: countDownReducer,
});

export default rootReducer
