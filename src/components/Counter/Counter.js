import React from 'react';
import s from './Counter.module.css';
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className={s.Counter}>
        <span className={s.CounterValue}>{this.state.value}</span>
        <div className={s.CounterControls}>
          <button type="button" onClick={this.handleIncrement}>
            Збільшити
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
