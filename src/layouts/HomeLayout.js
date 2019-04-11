import React, { PureComponent } from "react";

export default class HomeLayout extends PureComponent {
  render() {
    return (
      <div style={{ minHeight: window.innerHeight }}>{this.props.children}</div>
    );
  }
}
