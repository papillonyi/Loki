import * as type from './actionTypes.js';
import * as Status from "./status";
import config from '../config'


export const fetchTypeStarted = () => ({
    type: type.LOGIN_STARTED,
});

export const fetchTypeSuccess = (result) => ({
    type: type.LOGIN_SUCCESS,
    result: {
        types: result
    }

});

export const fetchTypeFailure = () => ({
    type: type.LOGIN_FAILURE,
});

export const logstatus = (user, password) => {
    return (dispatch) => {
        const apiUrl = `${config.SERVER}/auth?username=${user}&password=${password}`;

        dispatch(fetchTypeStarted());

        fetch(apiUrl, {
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((response) => {
                dispatch(fetchTypeSuccess(response));
            }).catch((error) => {
                dispatch(fetchTypeFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchTypeFailure(error));
        })
    };
};


