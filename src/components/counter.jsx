import React, { Component } from "react";

class Counter extends Component {

  state = {
    value : this.props.counter.value
  }

  styles = {
    fontSize: 13,
    fontWeight: "bold",
  };

  render() {

    const { onIncrement, onDelete } = this.props

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(this.props.counter.id)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount = () =>
    this.props.counter.value === 0 ? "zero" : this.props.counter.value;

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
