import { UPDATE_EMPLOYEE_NAME } from '../actions/types';

const initialState = {
    employeeName: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_EMPLOYEE_NAME: {
            const newState = { ...state };
            newState.employeeName = action.name;
            return newState;
        }   
        default:
            return state;
    }
};