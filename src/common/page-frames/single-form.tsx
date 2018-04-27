import * as React from 'react';

import './single-form.css';
import { PageFrameSingleFormProps } from '../../../types';
import PageFrameGeneric from './generic';

/**
 * PageFrameSingleForm is for a pages that only requires one form.
 * For example, sign up, log in, create account, etc. all use this frame.
 */
class PageFrameSingleForm extends PageFrameGeneric<PageFrameSingleFormProps> {
  constructor(props: PageFrameSingleFormProps) {
    super(props);
    document.title = `${props.title} | Mentor In Tech`;
  }

  public render() {
    const { title, path, formTitle, formInstructions, children, additionalInfo } = this.props;

    return (
      <PageFrameGeneric title={title} path={path}>
        <div className="container">
          {/* render form title if exists */}
          {formTitle && <div id="form-title" className="title">{formTitle}</div>}
          {/* end of form title */}

          <div className="columns is-centered">
            <div id="form-content" className="columns is-multiline is-centered">
              {/* render form instructions if exists */}
              {formInstructions && <p id="form-instructions" className="has-text-grey">{formInstructions}</p>}
              {/* end of form insructions */}

              {/* page contents */}
              {children}
              {/* end of page contents */}
            </div>
          </div>

          {/* render additional, below-form information if exists */}
          {additionalInfo && <div id="additional-info" className="has-text-centered">{additionalInfo}</div>}
          {/* end of form additional information */}
        </div>
      </PageFrameGeneric>
    );
  }
}

export default PageFrameSingleForm;
