import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import './index.css';
import './styles/dark.css';
import './styles/light.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
)