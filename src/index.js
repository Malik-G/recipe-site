import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/index';
import rootSaga from './redux/sagas/index';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

//Create instance of redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
	[sagaMiddleware, logger] :
	[sagaMiddleware];

// tells the saga middleware to use the rootReducer
// adds all middleware to our project including saga and logger
const storeInstance = createStore(
	rootReducer,
	applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
