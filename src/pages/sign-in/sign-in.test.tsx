import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SignIn from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
