import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';
import * as Status from "./status";

export const fetchRateStarted = (id, scur, tcur) => ({
    type: FETCH_STARTED,
    result: {
        [id]: {
            scur: scur,
            tcur: tcur,
            rate: 0,
            status: Status.LOADING
        }
    }

});

export const fetchRateSuccess = (id, scur, tcur, result) => ({
    type: FETCH_SUCCESS,
    result: {
        [id]: {
            scur: scur,
            tcur: tcur,
            rate: result,
            status: Status.SUCCESS
        }
    }

});

export const fetchRateFailure = (id, scur, tcur, error) => ({
    type: FETCH_FAILURE,
    result: {
        [id]: {
            scur: scur,
            tcur: tcur,
            rate: error,
            status: Status.FAILURE
        }
    }

});

export const fetchRate = (id, scur, tcur) => {
    return (dispatch) => {
        const apiUrl = `/api/v1/currency/scur/${scur}/tcur/${tcur}`;


        const dispatchIfValid = (action) => {
            return dispatch(action);
        };

        dispatchIfValid(fetchRateStarted(id, scur, tcur));

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((response) => {
                dispatchIfValid(fetchRateSuccess(id, scur, tcur, response));
            }).catch((error) => {
                dispatchIfValid(fetchRateFailure(id, scur, tcur, error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchRateFailure(id, scur, tcur, error));
        })
    };
};

export const fetchTypeStarted = () => ({
    type: FETCH_STARTED,
});

export const fetchTypeSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result: {
        types: result
    }

});

export const fetchTypeFailure = () => ({
    type: FETCH_FAILURE,
});

export const fetchType = () => {
    return (dispatch) => {
        const apiUrl = `/api/v1/currency/currency-type/`;


        const dispatchIfValid = (action) => {
            return dispatch(action);
        };

        dispatchIfValid(fetchTypeStarted());

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((response) => {
                dispatchIfValid(fetchTypeSuccess(response));
            }).catch((error) => {
                dispatchIfValid(fetchTypeFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchTypeFailure(error));
        })
    };
};


