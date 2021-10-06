import React, { Component } from 'react';
import s from './ColorPicker.module.css';
// console.log(s);
class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  makeOptionClases = index => {
    const classes = [s.ColorPickerOption];
    if (index === this.state.activeOptionIdx) {
      classes.push(s.ColorPickerOptionActive);
    }
    return classes.join(' ');
  };
  setActiveIdx = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const activeOption = options[activeOptionIdx].label;
    // console.log(activeOption);
    return (
      <div className={s.ColorPicker}>
        <h2 className={s.ColorPickerTitle}>Color Picker</h2>
        <p>Active color: {activeOption}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClases(index)}
              style={{
                backgroundColor: color,
                border: index === activeOptionIdx && '5px solid black',
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
