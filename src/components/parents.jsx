import React, { Component, PureComponent } from "react";
import RegComp from "./regComp";
import PureComp from "./pureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Royce",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Royce",
      });
    }, 2000);
  }
  render() {
    console.log("Parent component render");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
