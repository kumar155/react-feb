import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SimpleReducer, decrementCounter, incrementCounter } from './reducers/simpleReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducers = combineReducers(
    {
        SimpleReducer,
        incrementCounter,
        decrementCounter,
    }
);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

export default store;