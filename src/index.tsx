import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";

import './i18n'


ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,

    document.getElementById('root')
);

reportWebVitals();
