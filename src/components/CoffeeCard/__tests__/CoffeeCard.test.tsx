import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CoffeeCard from '../index';

describe('CoffeeCard Component', () => {
  const props = {
    image: 'image-url',
    name: 'Coffee Name',
    description: 'Coffee Description',
    price: '$5.00',
    tags: ['Tag1', 'Tag2'],
    onAddToCart: jest.fn(),
  };

  it('renders coffee card with correct details', () => {
    render(<CoffeeCard {...props} />);
    expect(screen.getByAltText('Coffee Name')).toBeInTheDocument();
    expect(screen.getByText('Coffee Name')).toBeInTheDocument();
    expect(screen.getByText('Coffee Description')).toBeInTheDocument();
    expect(screen.getByText('$5.00')).toBeInTheDocument();
    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    render(<CoffeeCard {...props} />);
    const button = screen.getByText('Add to Cart');
    fireEvent.click(button);
    expect(props.onAddToCart).toHaveBeenCalled();
  });
});
