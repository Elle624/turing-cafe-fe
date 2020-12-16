import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Component/Form';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {

  beforeEach(() => {
    render(<Form />)
  })

  it('should render all inputs field upon loading', () => {
    const name = screen.getByPlaceholderText('Name');
    const date = screen.getByPlaceholderText('Date(mm/dd)');
    const time = screen.getByPlaceholderText('Time');
    const number = screen.getByPlaceholderText('Number of guests');
    const submitButton = screen.getByRole('button');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })

  it('should change value when user is typing in inputs fields', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date(mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');
    userEvent.type(nameInput, 'Elle');
    userEvent.type(dateInput, '12/16');
    userEvent.type(timeInput, '3:00');
    userEvent.type(numberInput, '2');

    expect(nameInput).toHaveValue('Elle');
    expect(dateInput).toHaveValue('12/16');
    expect(timeInput).toHaveValue('3:00');
    expect(numberInput).toHaveValue('2');
  })

})