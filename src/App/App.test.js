import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should be able to add new reservation to display', () => {
    render(<App />);

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date(mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');
    const submitButton = screen.getByRole('button');
    userEvent.type(nameInput, 'Isabel');
    userEvent.type(dateInput, '05/27');
    userEvent.type(timeInput, '1:00');
    userEvent.type(numberInput, '2');
    userEvent.click(submitButton);

    expect(screen.getByText('Isabel')).toBeInTheDocument();
    expect(screen.getByText('05/27')).toBeInTheDocument();
    expect(screen.getByText('1:00')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  })
})
