import * as React from 'react';

import Page from '../../common/page';

import './landing.css';

class Landing extends React.Component {
  public render() {
    return (
      <Page title="Create new account">
        <div className="container">
          Welcome!
        </div>
      </Page>
    );
  }
}

export default Landing;
