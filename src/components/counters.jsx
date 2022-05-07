import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  styles = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 20
  };

  render() {
    return (
      <div>
        <div style={this.styles}>
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
          <span className="badge m-2 badge-pill badge-secondary">Total # {this.handleTotalCount()}</span>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.handleIncrement(counter.id)}
            onDelete={() => this.handleDelete(counter.id)}
          />
        ))}
      </div>
    );
  }

  handleTotalCount = () => {
    let count = 0;
    this.state.counters.forEach((counter) => (count = count + counter.value));
    return count;
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id == counterId) {
        counter.value++;
      }
      return counter;
    });
    this.setState({ counters: counters });
  };
}

export default Counters;
