import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display-container">
        <p>{this.props.result}</p>
      </div>
    );
  }
}

export default Display;
