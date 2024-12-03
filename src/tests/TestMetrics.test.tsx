import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import TimeMetrics from '../views/TimeMetrics';

jest.mock('axios'); 

test('fetches and displays data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockResolvedValueOnce({
    data: { epoch: 1632996000 },
  });
  mockedAxios.get.mockResolvedValueOnce({
    data: 'metric_1 123\nmetric_2 456',
  });

  render(<TimeMetrics />);

  expect(await screen.findByText(/Server Time \(epoch\): 1632996000/)).toBeInTheDocument();
  expect(await screen.findByText(/metric_1 123/)).toBeInTheDocument();
});