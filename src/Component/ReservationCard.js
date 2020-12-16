import React from 'react';
import '../styles/ReservationCard.css'

const ReservationCard = ({ reservations }) => {
  const reservationsCards = reservations.map(reservation => {
    return (
      <section key={reservation.id} className='card'>
        <p>{reservation.name}</p>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>{reservation.number}</p>
      </section>
    )
  })


  return (
    <section className='cards-container'>
      {reservationsCards}
    </section>
  )
}

export default ReservationCard;