import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../index';

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders options', () => {
    render(<Select options={options} selected="option1" onSelect={() => {}} />);
    const optionElements = screen.getAllByText(/Option/);
    expect(optionElements).toHaveLength(2);
  });

  it('calls onSelect when an option is clicked', () => {
    const onSelectMock = jest.fn();
    render(<Select options={options} selected="option1" onSelect={onSelectMock} />);
    const optionElement = screen.getByText('Option 2');
    fireEvent.click(optionElement);
    expect(onSelectMock).toHaveBeenCalledWith('option2');
  });
});
