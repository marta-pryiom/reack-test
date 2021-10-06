import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  hide = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;

    return (
      <div className={s.Dropdown}>
        <button
          type="button className={s.DropdownToggle}"
          onClick={this.toggle}
        >
          {visible ? 'shut' : 'open'}
        </button>
        {visible && <div>Dropdown here</div>}
      </div>
    );
  }
}
export default Dropdown;
