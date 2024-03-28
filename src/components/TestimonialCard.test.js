import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestimonialCard } from './TestimonialCard';

describe('TestimonialCard component', () => {
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      description: 'This is a sample testimonial.',
      image: 'profile-picture.jpg',
    },
    {
      id: 2,
      author: 'Jane Smith',
      description: 'Another sample testimonial.',
      image: 'profile-picture2.jpg',
    },
  ];

  test('renders the TestimonialCard component with given data', () => {
    render(<TestimonialCard />);

    // Check if the title "Testimonials" is rendered
    const titleElement = screen.getByText('Testimonials');
    expect(titleElement).toBeInTheDocument();

    // Check if each testimonial author and description is rendered
    testimonials.forEach(testimonial => {
      const authorElement = screen.getByText(testimonial.author);
      expect(authorElement).toBeInTheDocument();

      const descriptionElement = screen.getByText(testimonial.description);
      expect(descriptionElement).toBeInTheDocument();
    });

    // Check if each testimonial image is rendered
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(testimonials.length);
  });
});
