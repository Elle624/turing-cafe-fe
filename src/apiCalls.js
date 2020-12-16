const getData = (path) => {
  return fetch(path)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Sorry we are having trouble getting reservations for you')
      }
    })
}

export const apiCalls = {
  getReservations: () => {
    return getData('http://localhost:3001/api/v1/reservations')
  },
  addReservation: (newReservation) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry we are having trouble adding reservations for you, please try again')
        }
      })
  },
  removeReservation: (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry we are having trouble removing reservations for you, please try again')
        }
      })
  }
}