/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

createStore(registerServiceWorker);

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root'),
);

registerServiceWorker();
