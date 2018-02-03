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

// ReactDOM.render(
//     <Provider store={store}>
//         <renderTextField />
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();