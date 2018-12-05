import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

import './index.css';



import * as serviceWorker from './serviceWorker';
const storeInitialState = {
    posts: null
};
const store = configStore(storeInitialState);

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
