import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Playtonic title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Playtonic/i);
  expect(linkElement).toBeInTheDocument();
});
