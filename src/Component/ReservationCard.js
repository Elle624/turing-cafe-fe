import React from 'react';

const ReservationCard = (reservations) => {
  const reservationsCards = reservations.map(reservation => {
    return (
      <section>
        <p>{reservation.name}</p>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>{reservation.number}</p>
      </section>
    )
  })


  return (
    <section>
      {reservationsCards}
    </section>
  )
}

export default ReservationCard;