import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './router';
import store from './store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Container from './components/Container';

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
