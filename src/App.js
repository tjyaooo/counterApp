import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import ParentComp from "./components/parents";
import EventBind from "./components/eventBind";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("App Constructor");
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  componentDidUpdate() {
    console.log("App updated");
  }

  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <EventBind />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
