import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import Router from './routers/index.js';

const App = () => (
  <Router />
);

export default compose(withRouter)(App);
