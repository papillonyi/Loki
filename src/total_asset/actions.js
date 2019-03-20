import * as type from './actionTypes.js';
import * as Status from "./status";
import config from '../config'

export const fetchRateStarted = (scur, tcur) => ({
    type: type.FETCH_RATE_STARTED,
    result: {
        scur: scur,
        tcur: tcur,
        rate: 0,
        status: Status.LOADING
    }

});

export const fetchRateSuccess = (scur, tcur, result) => ({
    type: type.FETCH_RATE_SUCCESS,
    result: {
        scur: scur,
        tcur: tcur,
        rate: result,
        status: Status.SUCCESS
    }

});

export const fetchRateFailure = (scur, tcur, error) => ({
    type: type.FETCH_RATE_FAILURE,
    result: {
        scur: scur,
        tcur: tcur,
        rate: error,
        status: Status.FAILURE
    }

});

export const fetchRate = (scur, tcur) => {
    return (dispatch) => {
        const apiUrl = `${config.SERVER}/api/v1/currency/scur/${scur}/tcur/${tcur}`;


        const dispatchIfValid = (action) => {
            return dispatch(action);
        };

        dispatchIfValid(fetchRateStarted(scur, tcur));

        fetch(apiUrl, {
            credentials: "include",
            mode: 'cors',
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((response) => {
                dispatchIfValid(fetchRateSuccess(scur, tcur, response));
            }).catch((error) => {
                dispatchIfValid(fetchRateFailure(scur, tcur, error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchRateFailure(scur, tcur, error));
        })
    };
};

export const fetchTypeStarted = () => ({
    type: type.FETCH_STARTED,
});

export const fetchTypeSuccess = (result) => ({
    type: type.FETCH_SUCCESS,
    result: {
        types: result
    }

});

export const fetchTypeFailure = () => ({
    type: type.FETCH_FAILURE,
});

export const fetchType = () => {
    return (dispatch) => {
        const apiUrl = `${config.SERVER}/api/v1/currency/currency-type/`;


        const dispatchIfValid = (action) => {
            return dispatch(action);
        };

        dispatchIfValid(fetchTypeStarted());

        fetch(apiUrl, {
            // mode: 'cors',
            credentials: "include"
        }).then((response) => {
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


