/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

createStore(registerServiceWorker);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//     <Provider store={store}>
//         <renderTextField />
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();
