import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../index';

describe('Cart Component', () => {
  it('renders empty cart', () => {
    render(<Cart state="empty" />);
    const cartElement = screen.getByRole('div');
    expect(cartElement).toBeInTheDocument();
  });

  it('renders full cart with count', () => {
    render(<Cart state="full" count={3} />);
    const counterElement = screen.getByText('3');
    expect(counterElement).toBeInTheDocument();
  });
});
