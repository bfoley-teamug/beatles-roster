import { combineReducers } from 'redux';
import BeatlesReducer from './reducers_beatles';
import ActiveBeatle from './reducer_active_beatle';

const rootReducer = combineReducers({
  beatles: BeatlesReducer,
  activeBeatle: ActiveBeatle
});

export default rootReducer;
