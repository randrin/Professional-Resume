import React, { Component } from "react";

export default class ButtonGoToTop extends Component {
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
