import React, { Component } from 'react';
import './App.css';
import { apiCalls } from '../apiCalls';
import ReservationCard from '../Component/ReservationCard';
import Form from '../Component/Form';
import Menu from '../Component/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      menu: [],
      viewMenu: false,
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

  getNewReservation = (newReservation) => {
    apiCalls.addReservation(newReservation)
      .then(() => this.getReservations())
  }

  removeReservation = (id) => {
    apiCalls.removeReservation(id)
      .then(() => this.getReservations())
  }

  getMenu = () => {
    apiCalls.getMenu()
      .then(data => {
        const list = [...data.drinks, ...data.food]
        this.setState((prevState) => {
          return { menu: list, viewMenu: !prevState.viewMenu }
        })
      })
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form getNewReservation={this.getNewReservation} />
        </div>
        <button onClick={this.getMenu}>{this.state.viewMenu ? 'Return' : 'Menu'}</button>
        <div className='resy-container'>
          {!this.state.viewMenu && <ReservationCard reservations={this.state.reservations} removeReservation={this.removeReservation} />}
          {this.state.viewMenu && <Menu menu={this.state.menu} />}
        </div>
      </div>
    )
  }
}

export default App;
