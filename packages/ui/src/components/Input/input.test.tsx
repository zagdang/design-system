// Input.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Input } from './input';

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test input" />);
    const input = screen.getByPlaceholderText('Test input');
    expect(input).toBeInTheDocument();
  });

  it('accepts value changes', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Test value' } });
    expect(input).toHaveValue('Test value');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles different input types', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});
