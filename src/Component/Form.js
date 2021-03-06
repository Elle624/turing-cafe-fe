import React, { Component } from 'react';
import '../styles/Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    const newReservation = {
      id: new Date().getTime(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.getNewReservation(newReservation);
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    const { name, date, time, number } = this.state
    return (
      <form className='reservation-form'>
        <input type='text' name='name' value={name} placeholder='Name' onChange={this.handleChange} />
        <input type='text' name='date' value={date} placeholder='Date(mm/dd)' onChange={this.handleChange} />
        <input type='text' name='time' value={time} placeholder='Time' onChange={this.handleChange} />
        <input type='text' name='number' value={number} placeholder='Number of guests' onChange={this.handleChange} />
        <input type="submit" value='Make Reservation' className='submit-button' onClick={this.handleClick} />
      </form>
    )
  }
}

export default Form;