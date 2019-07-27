import { combineReducers } from 'redux';
import heroes from './heroes/reducers';
import locations from './locations/reducers';


export default combineReducers({
    heroes,
    locations,
});