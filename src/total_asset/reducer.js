import * as type from './actionTypes.js';

export default (state = {types:[]}, action) => {
    switch(action.type) {
        case type.FETCH_STARTED: {
            return {...state, ...action.result};
        }
        case type.FETCH_SUCCESS: {
            return {...state, ...action.result};
        }
        case type.FETCH_FAILURE: {
            return {...state, ...action.result};
        }

        case type.FETCH_RATE_STARTED: {
            let scur = action.result.scur;
            let tcur = action.result.tcur;
            let info = state[scur] || {};
            info[tcur] = action.result.rate;

            return {...state, ...{[scur]: info}};
        }
        case type.FETCH_RATE_SUCCESS: {
            let scur = action.result.scur;
            let tcur = action.result.tcur;
            let info = state[scur] || {};
            info[tcur] = action.result.rate;

            return {...state, ...{[scur]: info}};
        }
        case type.FETCH_RATE_FAILURE: {
            let scur = action.result.scur;
            let tcur = action.result.tcur;
            let info = state[scur] || {};
            info[tcur] = action.result.rate;

            return {...state, ...{[scur]: info}};
        }

        default: {
            return state;
        }
    }
}
