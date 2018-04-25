import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SignUp from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
