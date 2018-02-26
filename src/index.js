/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(registerServiceWorker);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();