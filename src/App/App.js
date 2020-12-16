import React, { Component } from 'react';
import './App.css';
import { apiCalls } from '../apiCalls';
import ReservationCard from '../Component/ReservationCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    this.getReservations();
  }

  getReservations = () => {
    apiCalls.getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(err => this.setState({ error: err.message }))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationCard reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
