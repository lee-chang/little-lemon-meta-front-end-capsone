// src/App.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';


test('renders home page', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if the home page content is rendered
  const homeElement = screen.getByText(/Welcome to Little Lemon Restaurant/i);
  expect(homeElement).toBeInTheDocument();
});

// Add more tests for other pages/components as needed
