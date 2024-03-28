import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './BookingForm';

describe('BookingForm component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  const availableTimes = {
    availableTimes: ['10:00 AM', '12:00 PM', '2:00 PM'],
  };

  test('renders the BookingForm component with form fields', () => {
    render(
      <BookingForm
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
        availableTimes={availableTimes}
      />
    );

    expect(screen.getByLabelText('Choose date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number Of Guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose occasion:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Make Your Reservation' })).toBeInTheDocument();
  });

  test('displays error messages for invalid input', () => {
    render(
      <BookingForm
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
        availableTimes={availableTimes}
      />
    );

    fireEvent.click(screen.getByLabelText('On Click'));

    expect(screen.getByText('Please select a future date.')).toBeInTheDocument();
    expect(screen.getByText('Please select a time.')).toBeInTheDocument();
    expect(screen.getByText('Please enter number of guests.')).toBeInTheDocument();

    
    fireEvent.change(screen.getByLabelText('Choose date:'), { target: { value: '2022-01-01' } });

    fireEvent.change(screen.getByLabelText('Choose time:'), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText('Number Of Guests:'), { target: { value: '15' } });

    fireEvent.click(screen.getByLabelText('On Click'));

    expect(screen.getByText('Number of guests should be between 1 and 10.')).toBeInTheDocument();
  });

  test('submits the form with valid input', () => {
    render(
      <BookingForm
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
        availableTimes={availableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText('Choose date:'), { target: { value: '2024-04-01' } });
    fireEvent.change(screen.getByLabelText('Choose time:'), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText('Number Of Guests:'), { target: { value: '5' } });

    fireEvent.click(screen.getByLabelText('On Click'));

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
