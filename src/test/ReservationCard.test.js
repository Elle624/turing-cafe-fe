import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationCard from '../Component/ReservationCard';

describe('ReservationCard component', () => {
  it('should render correctly', () => {
    render(<ReservationCard reservations={[
      {
        "id": 111,
        "name": "Ben",
        "date": "6/7",
        "time": "3:00",
        "number": 1
      },
      {
        "id": 222,
        "name": "Thao",
        "date": "2/1",
        "time": "4:00",
        "number": 2
      },
    ]} />)
    const name1 = screen.getByText('Ben')
    const name2 = screen.getByText('Thao')
    const date1 = screen.getByText('6/7')
    const date2 = screen.getByText('2/1')
    const time1 = screen.getByText('3:00')
    const time2 = screen.getByText('4:00')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')

    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
    expect(date1).toBeInTheDocument();
    expect(date2).toBeInTheDocument();
    expect(time1).toBeInTheDocument();
    expect(time2).toBeInTheDocument();
    expect(number1).toBeInTheDocument();
    expect(number2).toBeInTheDocument();
  })
})