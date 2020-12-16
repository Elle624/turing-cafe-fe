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

  render() {
    const { name, date, time, number } = this.state
    return (
      <form className='reservation-form'>
        <input type='text' name='name' value={name} placeholder='Name' />
        <input type='text' name='date' value={date} placeholder='Date(mm/dd)' />
        <input type='text' name='time' value={time} placeholder='Time' />
        <input type='text' name='number' value={number} placeholder='Number of guests' />
        <input type="submit" value='Make Reservation' className='submit-button' />
      </form>
    )
  }
}

export default Form;