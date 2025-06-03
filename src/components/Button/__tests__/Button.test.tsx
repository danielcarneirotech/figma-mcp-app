import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../index';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" type="primary" state="default" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct styles for primary type', () => {
    render(<Button label="Click Me" type="primary" state="default" />);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('primary');
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" type="primary" state="default" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
