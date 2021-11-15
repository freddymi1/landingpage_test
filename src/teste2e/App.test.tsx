import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar links', () => {
  render(<App />);
  const logo = screen.getByText(/Coding River/i);
  const link1 = screen.getByText(/Home/i);
  expect(logo).toBeInTheDocument();
  expect(link1).toBeInTheDocument();
});
