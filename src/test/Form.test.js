import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Form from '../Component/Form';

describe('Form component', () => {

  it('should render all inputs field upon loading', () => {
    render(<Form />)
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

})