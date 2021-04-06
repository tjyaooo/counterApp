import React, { PureComponent } from "react";
class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Pure component render");
    return <div>pure component {this.props.name}</div>;
  }
}

export default PureComp;
