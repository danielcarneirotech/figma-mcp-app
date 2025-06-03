import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../index';

describe('Input Component', () => {
  it('renders the label correctly', () => {
    render(<Input label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders optional text when optional prop is true', () => {
    render(<Input label="Test Label" optional />);
    expect(screen.getByText('Opcional')).toBeInTheDocument();
  });

  it('applies active styles when active prop is true', () => {
    render(<Input label="Test Label" active />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('active');
  });

  it('applies filled styles when filled prop is true', () => {
    render(<Input label="Test Label" filled />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('filled');
  });
});
