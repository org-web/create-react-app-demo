import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import store from "./redux/store";
import BasicLayout from "./layouts/BasicLayout";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={BasicLayout} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
