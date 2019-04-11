import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>Hello World!</p>
          <Home />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
