import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '../components/Form';

describe('<Form />', () => {
  test('renders initial values correctly', () => {
    render(<Form />);

    expect(screen.getByLabelText(/Number of charge points:/i)).toHaveValue(20);
    expect(
      screen.getByLabelText(/Charging power of charge points:/i),
    ).toHaveValue(11);
    expect(screen.getByLabelText(/Arrival probability/i)).toHaveValue(100);
    expect(screen.getByLabelText(/Consumption of cars/i)).toHaveValue(18);
  });

  test('updates input values on change', () => {
    render(<Form />);

    const chargePointsInput = screen.getByLabelText(
      /Number of charge points:/i,
    );

    fireEvent.change(chargePointsInput, { target: { value: 25 } });

    expect(chargePointsInput).toHaveValue(25);
  });

  test('creates a new charge point', () => {
    const { container } = render(<Form />);

    const addButton = screen.getByRole('button', {
      name: /Create charge points/i,
    });

    fireEvent.click(addButton);

    const chargePointsInputs = container.querySelectorAll(
      'input[name="chargePoints"]',
    );
    expect(chargePointsInputs.length).toBe(2);
  });

  test('removes a charge point', () => {
    render(<Form />);

    const addButton = screen.getByRole('button', {
      name: /Create charge points/i,
    });

    fireEvent.click(addButton);
    const removeButton = screen.getAllByRole('button', { name: /X/i })[0];
    fireEvent.click(removeButton);

    const chargePointsInputs = screen.getAllByLabelText(
      /Number of charge points:/i,
    );
    expect(chargePointsInputs.length).toBe(1);
  });

  test('submits successfully when there are no errors', () => {
    render(<Form />);

    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.click(submitButton);

    const canvasElement = screen.getAllByRole('img');

    expect(canvasElement.length).toBe(5);
  });

  test('does not submit when there are errors', () => {
    render(<Form />);

    const arrivalProbabilityInput =
      screen.getByLabelText(/Arrival probability/i);

    fireEvent.change(arrivalProbabilityInput, { target: { value: 10 } });

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(
      screen.getByText(/Please enter a value between 20% - 200%/i),
    ).toBeInTheDocument();

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('resets form to initial values', () => {
    render(<Form />);

    const resetButton = screen.getByRole('button', { name: /Reset/i });

    const chargePointsInput = screen.getByLabelText(
      /Number of charge points:/i,
    );
    fireEvent.change(chargePointsInput, { target: { value: 30 } });

    fireEvent.click(resetButton);

    expect(chargePointsInput).toHaveValue(20);
  });
});
