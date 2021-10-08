import { Component } from 'react';
import shortid from 'shortid';
import s from './Forms.module.css';
console.log(s);
class Forms extends Component {
  state = {
    name: '',
    lastName: '',
    experience: 'senior',
    licence: false,
  };
  shortNameId = shortid.generate();
  lastNameShortId = shortid.generate();
  handleForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  inputDataGive = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', lastName: '' });
  };
  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
    console.log(e.currentTarget.checked);
  };
  render() {
    const { name, lastName } = this.state;
    return (
      <form onSubmit={this.inputDataGive}>
        <label htmlFor={this.shortNameId}>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleForm}
            id={this.shortNameId}
          />
        </label>
        <label htmlFor={this.lastNameShortId}>
          Last name{' '}
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleForm}
            id={this.lastNameShortId}
          />
        </label>
        <button type="submit">Sent</button>
        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleForm}
            checked={this.state.experience === 'junior'}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleForm}
            checked={this.state.experience === 'middle'}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleForm}
            checked={this.state.experience === 'senior'}
          />
          senior
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Згідний з умовами
        </label>
      </form>
    );
  }
}
export default Forms;
