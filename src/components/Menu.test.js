import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';

describe('Menu component', () => {
  const mockSwalFire = jest.fn();
  jest.mock('sweetalert2', () => ({
    fire: mockSwalFire
  }));

  const recipes = [
    {
      id: 1,
      title: 'Pasta',
      price: 10,
      description: 'Delicious pasta dish',
      image: 'pasta.jpg'
    },
    {
      id: 2,
      title: 'Pizza',
      price: 12,
      description: 'Tasty pizza',
      image: 'pizza.jpg'
    }
  ];

  test('renders the Menu component with recipe cards', () => {
    render(<Menu />);

    // Check if the title "This Week's Specials!!" is rendered
    expect(screen.getByText("This Week's Specials!!")).toBeInTheDocument();

    // Check if each recipe card is rendered with title, price, description, and order button
    recipes.forEach(recipe => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
      expect(screen.getByText(`$ ${recipe.price}`)).toBeInTheDocument();
      expect(screen.getByText(recipe.description)).toBeInTheDocument();
      expect(screen.getByText('Order Now')).toBeInTheDocument();
    });
  });

  test('displays confirmation dialog when ordering a recipe', () => {
    render(<Menu />);

    // Click the order button for the first recipe
    fireEvent.click(screen.getByText('Order Now'));

    // Check if the confirmation dialog is displayed
    expect(mockSwalFire).toHaveBeenCalledWith({
      title: 'Do you want to confirm order?',
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    });
  });

  test('displays success message when order is confirmed', () => {
    render(<Menu />);

    // Mock the result of confirmation dialog
    mockSwalFire.mockImplementationOnce(() => Promise.resolve({ isConfirmed: true }));

    // Click the order button for the first recipe
    fireEvent.click(screen.getByText('Order Now'));

    // Check if success message is displayed
    expect(mockSwalFire).toHaveBeenCalledWith({
      title: "Ordered!",
      text: "Your item is being ordered.",
      icon: "success"
    });
  });
});
