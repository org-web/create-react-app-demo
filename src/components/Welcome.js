import React, { Component } from "react";

class Welcome extends Component {
  jumpByPath = path => {
    const { history } = this.props;
    history.push({ pathname: path });
  };
  render() {
    return (
      <div>
        <p>Welcome</p>
        <button onClick={() => this.jumpByPath("/Home")}>Go Home</button>
      </div>
    );
  }
}

export default Welcome;
