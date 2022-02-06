//Libs
import { createStore, applyMiddleware } from 'redux';
import Raven from 'raven-js';
import { composeWithDevTools } from 'redux-devtools-extension';

//  Middlewares
import createSagaMiddleware from 'redux-saga';
import createRavenMiddleware from "raven-for-redux";

//  Root Saga
import rootSaga from './sagas';

//  Root Reducer
import rootReducer from './reducers';

//  Middlewares
const sagaMiddleware = createSagaMiddleware({ onError: (err) => Raven.captureException(err) });
const ravenMiddleware = createRavenMiddleware(Raven);
const middlewares = applyMiddleware(sagaMiddleware, ravenMiddleware); //  Separate different middlewares by comma (,) into "applyMiddleware()"
const store = process.env.NODE_ENV === 'development' ? createStore(rootReducer, composeWithDevTools(middlewares)) : createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;