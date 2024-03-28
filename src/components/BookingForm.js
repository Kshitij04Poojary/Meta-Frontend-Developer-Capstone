import React, { useState } from 'react'

export const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [errors, setErrors] = useState({
        date: '',
        time: '',
        guests: ''
    });

    
    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const selectedDate = new Date(date);
        const newErrors = { date: '', time: '', guests: '' };

        if (selectedDate < currentDate) {
            newErrors.date = "Please select a future date.";
        }

        if (!times) {
            newErrors.time = "Please select a time.";
        }

        if (!guests) {
            newErrors.guests = "Please enter number of guests.";
        } else if (guests < 1 || guests > 10) {
            newErrors.guests = "Number of guests should be between 1 and 10.";
        }

        if (newErrors.date || newErrors.time || newErrors.guests) {
            setErrors(newErrors);
            return;
        }

        setErrors({ date: '', time: '', guests: '' });
        props.SubmitForm(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose date: </label>
                            <input type="date" value={date} onChange={handleChange} id='book-date' required />
                            <p>{errors.date && <span className="error-message">{errors.date}</span>}</p>
                        </div>

                        <div>
                        <label htmlFor='book-time'>Choose time: </label>
                        <select id="book-time" required value={times} onChange={(e)=>setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes=>{return <option key=
                                    {availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        <p>{errors.time && <span className="error-message">{errors.time}</span>}</p>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number Of Guests: </label>
                            <input type="number" value={guests} min="1" max="10" required id='book-guests' onChange={(e)=>setGuests(e.target.value)} />
                            {errors.guests && <span className="error-message">{errors.guests}</span>}
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Choose occasion: </label>
                            <select value={occasion} id='book-occasion' onChange={(e)=>setOccasion(e.target.value)} required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btn-receive">
                            <input aria-label='On Click' type="submit" value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header> 
  )
}
