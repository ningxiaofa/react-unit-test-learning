import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i); // 要跟随组件一起改变
  expect(linkElement).toBeInTheDocument();
});
