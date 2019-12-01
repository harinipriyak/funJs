import { combineReducers } from 'redux';
import sampleReducer from './sample-reducer';


export const reducers = {
    sampleReducer,
};

export default combineReducers(reducers);
