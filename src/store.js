import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SimpleReducer, decrementCounter, incrementCounter } from './reducers/simpleReducer';
import { userReducer, isDataLoading } from './reducers/userReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { questions, comboBoxOptions } from './reducers/Questions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers(
    {
        SimpleReducer,
        incrementCounter,
        decrementCounter,
        questions,
        comboBoxOptions,
        userReducer,
        isDataLoading,
    }
);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

export default store;