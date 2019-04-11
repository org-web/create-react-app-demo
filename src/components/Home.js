import React, { Component } from "react";
import { connect } from "react-redux";

import { setSuccess, setName } from "../redux/actions/testAction";

class Home extends Component {
  handleClick = () => {
    const { setSuccess, setName } = this.props;
    setSuccess();
    setName("Mickey");
  };
  render() {
    const { testData } = this.props;
    const { isSuccess, name } = testData;

    return (
      <div className="App">
        <p>Home</p>
        <p>success: {isSuccess}</p>
        <p>name: {name}</p>
        <button onClick={this.handleClick}>set success</button>
      </div>
    );
  }
}

export default connect(
  // 实现一个容器组件
  ({ testData }) => ({ testData }),
  { setSuccess, setName } // bindActionCreators的简写
)(Home);
