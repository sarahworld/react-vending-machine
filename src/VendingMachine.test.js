import { render, screen } from '@testing-library/react';
import VendingMachine from './VendingMachine';

test('renders learn react link', () => {
  render(<VendingMachine />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
