import React, { useState } from 'react';

export const Form = () => {
  const initialState = {
    chargePoints: 20,
    chargingPower: 11,
    arrivalProbability: 100,
    carConsumption: 18,
  };
  const [userInput, setUserInput] = useState(initialState);
  const [arrivalProbabilityError, setArrivalProbabilityError] = useState(false);

  const inputContainerStyle = 'flex flex-col';
  const labelStyle = 'text-xs mb-2 text-neutral-900';
  const inputStyle =
    'rounded-md py-2 px-6 mr-2 text-2xl h-12 text-neutral-600 w-24 text-center border border-neutral-200';
  const spanStyle = 'text-xl text-neutral-900';

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    if (numericValue > 0)
      setUserInput((prev) => ({ ...prev, [name]: numericValue }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userInput.arrivalProbability < 20 ||
      userInput.arrivalProbability > 200
    ) {
      setArrivalProbabilityError(true);
    } else {
      setArrivalProbabilityError(false);
      alert('Success');
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUserInput({ ...initialState });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col">
      <div className="flex justify-around mb-8">
        <div className={inputContainerStyle}>
          <label htmlFor="chargePoints" className={labelStyle}>
            Number of charge points:
          </label>
          <input
            type="number"
            name="chargePoints"
            value={userInput.chargePoints}
            onChange={handleOnChange}
            className={inputStyle}
          />
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="chargingPower" className={labelStyle}>
            Charging power of charge point:
          </label>
          <div>
            <input
              type="number"
              name="chargingPower"
              value={userInput.chargingPower}
              onChange={handleOnChange}
              className={inputStyle}
            />
            <span className={spanStyle}>kW</span>
          </div>
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="arrivalProbability" className={labelStyle}>
            Arrival probability (%20 - %200):
          </label>
          <div>
            {' '}
            <input
              type="number"
              name="arrivalProbability"
              value={userInput.arrivalProbability}
              onChange={handleOnChange}
              className={inputStyle}
            />
            <span className={spanStyle}>%</span>
          </div>
          {arrivalProbabilityError && (
            <span className="text-xs text-red-500 mt-1">
              Please enter a value between 20% - 200%
            </span>
          )}
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="carConsumption" className={labelStyle}>
            Consumption of cars:
          </label>
          <div>
            <input
              type="number"
              name="carConsumption"
              value={userInput.carConsumption}
              onChange={handleOnChange}
              className={inputStyle}
            />
            <span className={spanStyle}>kWh</span>
          </div>
        </div>
      </div>
      <div className="self-center">
        <button
          type="reset"
          onClick={handleReset}
          className="text-sm font-medium rounded-full bg-neutral-200 text-neutral-600 px-4 py-1 mr-5"
        >
          Reset
        </button>
        <button
          type="submit"
          className="text-sm font-medium rounded-full bg-gray-900 text-neutral-100 px-4 py-1"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
