import React, { Component } from 'react';
import { increment, decrement } from './Actions';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props) {
    console.log('Counter PAGE');
    super(props);
  }

  increment = () => {
    console.log('increment clicked');

    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <div>This is the count : {this.props.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
