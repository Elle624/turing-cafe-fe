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
  }
}