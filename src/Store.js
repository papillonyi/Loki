import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'

import {reducer as totalAssetReducer} from './total_asset/';

//
// const win = window;
// win.Perf = Perf

const reducer = combineReducers({
    totalAsset: totalAssetReducer
});

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    // (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

