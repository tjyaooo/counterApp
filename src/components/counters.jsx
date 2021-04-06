import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
    quantitySum: 0,
  };

  updateCounterVal = (counterId) => {
    let counters = [...this.state.counters];
    let index = counterId - 1;
    counters[index].value++;

    this.setState({
      counters: counters,
      quantitySum: this.state.quantitySum + 1,
    });
  };

  deleteCounter = (counterId, counterQuan) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters: counters,
      quantitySum: this.state.quantitySum - counterQuan,
    });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    this.state.counters.map((counter) => (counter.value = 0));

    this.setState({ counters: counters, quantitySum: 0 });
  };

  render = () => {
    return (
      <div>
        <div>
          <h1>Total Quantity: {this.state.quantitySum}</h1>
        </div>

        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              onIncrement={this.updateCounterVal}
              counter={counter}
              onDelete={this.deleteCounter}
            />
          ))}
        </div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-lg m-2"
        >
          reset
        </button>
      </div>
    );
  };
}

export default Counters;
