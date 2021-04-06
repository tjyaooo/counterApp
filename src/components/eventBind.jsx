import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "haih what is this",
    };
  }

  clickHandler() {
    this.setState({ message: "GoodBye" });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>BUTTON</button>
      </div>
    );
  }
}
export default EventBind;
