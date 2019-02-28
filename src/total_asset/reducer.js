import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export default (state = {types:[]}, action) => {
    switch(action.type) {
        case FETCH_STARTED: {
            return {...state, ...action.result};
        }
        case FETCH_SUCCESS: {
            return {...state, ...action.result};
        }
        case FETCH_FAILURE: {
            return {...state, ...action.result};
        }
        default: {
            return state;
        }
    }
}
