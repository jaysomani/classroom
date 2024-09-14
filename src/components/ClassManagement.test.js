// src/components/ClassManagement.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClassManagement from './Classmanagement';
import axios from 'axios';

jest.mock('axios');

test('renders class management page', async () => {
  axios.get.mockResolvedValueOnce({ data: [{ id: '1', name: 'Math' }] });
  render(<ClassManagement />);
  expect(await screen.findByText('Math')).toBeInTheDocument();
});

test('adds a new class', async () => {
  axios.get.mockResolvedValueOnce({ data: [] });
  axios.post.mockResolvedValueOnce({ data: { id: '2', name: 'Science' } });
  render(<ClassManagement />);
  fireEvent.change(screen.getByPlaceholderText('New Class Name'), { target: { value: 'Science' } });
  fireEvent.click(screen.getByText('Add Class'));
  expect(await screen.findByText('Science')).toBeInTheDocument();
});
