import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders TimeMetrics component by default', () => {
  render(<App />);
  expect(screen.getByText(/Server Time/i)).toBeInTheDocument();
});

test('renders CvDisplay component when CV tab is clicked', () => {
  render(<App />);
  const pdfTab = screen.getByRole('button', { name: /cv/i });
  fireEvent.click(pdfTab);

  expect(screen.getByText(/Conor McKeever CV/i)).toBeInTheDocument();
});