import * as React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

import { PageFrameProps } from '../../../types';

import './page-frame.css';

class PageFrame extends React.Component<PageFrameProps, any> {
  constructor(props: PageFrameProps) {
    super(props);
    document.title = `${props.title} | Mentor In Tech`;
  }

  public render() {
    return (
      <div id="page">
        <div id="content-wrapper">
          <Navbar path={this.props.path} />

          {/* page contents */}
          <section className="section">
            {this.props.children}
          </section>
          {/* end of page contents */}

        </div>

        <Footer />
      </div>
    );
  }
}

export default PageFrame;
