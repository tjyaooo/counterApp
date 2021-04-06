import React, { Component } from "react";

class RegComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("reg component render");
    return <div>regular component {this.props.name}</div>;
  }
}

export default RegComp;
