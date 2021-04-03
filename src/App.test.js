import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // The link is no longer there, and as most of the functionality is in the <Menu> component,
  // there's not really much to test. However deleting App.test seems a bit drastic

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
