import React, { Component } from 'react';

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
    return (
      <form className='reservation-form'>
        <input name='name' placeholder='Name' />
        <input name='date' placeholder='Date(mm/dd)' />
        <input name='time' placeholder='Time' />
        <input name='number' placeholder='Number of guests' />
        <input type="submit" value='Make Reservation' />
      </form>
    )
  }
}

export default Form;