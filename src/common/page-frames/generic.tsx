import * as React from 'react';

import './generic.css';
import Footer from '../footer';
import Navbar from '../navbar';

import { PageFrameGenericProps } from '../../../types';

/**
 * PageFrameGeneric is the generic, blank page for a typical Mentor In Tech page.
 * This frame provides the most basic layout, only a navbar and a footer.
 *
 * Most of subpages should extend on PageFrameGeneric so that we have consistent base layout.
 */
class PageFrameGeneric<T extends PageFrameGenericProps> extends React.Component<T, any> {
  constructor(props: T) {
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

export default PageFrameGeneric;
