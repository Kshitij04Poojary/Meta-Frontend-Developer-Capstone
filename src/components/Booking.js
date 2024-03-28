import React from 'react'
import { BookingForm } from './BookingForm'
export const Booking = (props) => {
  return (
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}
    SubmitForm={props.SubmitForm} />
  )
}
