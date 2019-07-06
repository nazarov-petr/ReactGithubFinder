import React, { Fragment } from "react";

const Loading = () => (
  <Fragment>
    <progress className="progress is-small is-primary" max="100">
      Loading...
    </progress>
  </Fragment>
);

export default Loading;
