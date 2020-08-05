import React, { PureComponent } from "react";

export default class ButtonGoToTop extends PureComponent {
  render() {
    return (
      <>
        <button id="scroll-top" className="btn btn-warning" title="Back to Top">
          <i className="fa fa-angle-up"></i>
        </button>
      </>
    );
  }
}
