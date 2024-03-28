import testimonials from "./Testimonials";
import "./TestimonialCard.css";
import React from 'react';

export const TestimonialCard = () => {
    return (
        <div className="test-container">
            <div className="testimonial-header">
                <h2>Testimonials</h2>
            </div>
            <div className="test-cards">
                {
                    testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='testimonial-items'>
                            <div className='testimonial-heading'>
                                <img src={testimonial.image} height={70} width={70} alt='' />
                                <h3>{testimonial.author}</h3>
                            </div>
                            <p>{testimonial.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
