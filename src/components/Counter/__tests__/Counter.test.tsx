import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../index';

describe('Counter Component', () => {
  it('renders counter with value', () => {
    render(<Counter value={5} onIncrement={() => {}} onDecrement={() => {}} />);
    const valueElement = screen.getByText('5');
    expect(valueElement).toBeInTheDocument();
  });

  it('calls onIncrement when increment button is clicked', () => {
    const onIncrementMock = jest.fn();
    render(<Counter value={5} onIncrement={onIncrementMock} onDecrement={() => {}} />);
    const incrementButton = screen.getByLabelText('Increment');
    fireEvent.click(incrementButton);
    expect(onIncrementMock).toHaveBeenCalled();
  });

  it('calls onDecrement when decrement button is clicked', () => {
    const onDecrementMock = jest.fn();
    render(<Counter value={5} onIncrement={() => {}} onDecrement={onDecrementMock} />);
    const decrementButton = screen.getByLabelText('Decrement');
    fireEvent.click(decrementButton);
    expect(onDecrementMock).toHaveBeenCalled();
  });
});
