import React, { useState } from 'react';
import { Results } from './Results';

type ChargeMetricsType = {
  chargePoints: {
    value: number;
    error: boolean;
  };
  chargingPower: {
    value: number;
    error: boolean;
  };
};

type InitialStateType = {
  chargeMetrics: ChargeMetricsType[];
  arrivalProbability: { value: number; error: boolean };
  carConsumption: { value: number; error: boolean };
};

export const Form = () => {
  const initialState = {
    chargeMetrics: [
      {
        chargePoints: { value: 20, error: false },
        chargingPower: { value: 11, error: false },
      },
    ],
    arrivalProbability: { value: 100, error: false },
    carConsumption: { value: 18, error: false },
  };

  const [{ chargeMetrics, arrivalProbability, carConsumption }, setUserInput] =
    useState<InitialStateType>(initialState);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inputContainerStyle = 'flex flex-col';
  const labelStyle = 'text-xs mb-2 text-neutral-900';
  const inputStyle =
    'rounded-md py-2 px-6 mr-2 text-2xl h-12 text-neutral-600 w-24 text-center border border-neutral-300';
  const spanStyle = 'text-xl text-neutral-900';
  const errorStyle = 'text-xs text-red-500 mt-1';

  const genericError = 'Please enter a valid number';

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number,
  ) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    if (
      (name === 'chargePoints' || name === 'chargingPower') &&
      index !== undefined
    ) {
      const updatedMetrics = [...chargeMetrics];

      updatedMetrics[index] = {
        ...updatedMetrics[index],
        [name]: { value: numericValue },
      };

      setUserInput((prev) => ({
        ...prev,
        chargeMetrics: updatedMetrics,
      }));

      if (numericValue < 1)
        updatedMetrics[index] = {
          ...updatedMetrics[index],
          [name]: { value: numericValue, error: true },
        };
    }

    setUserInput((prev) => ({ ...prev, [name]: { value: numericValue } }));

    if (
      name === 'arrivalProbability' &&
      (numericValue < 20 || numericValue > 200)
    ) {
      setUserInput((prev) => ({
        ...prev,
        [name]: { value: numericValue, error: true },
      }));
    }

    if (numericValue < 1)
      setUserInput((prev) => ({
        ...prev,
        [name]: { value: numericValue, error: true },
      }));
  };

  const handleAddChargeMetric = () => {
    setSubmitSuccess(false);
    setUserInput((prev) => ({
      ...prev,
      chargeMetrics: [
        ...prev.chargeMetrics,
        {
          chargePoints: { value: 3, error: false },
          chargingPower: { value: 22, error: false },
        },
      ],
    }));
  };

  const handleRemoveChargeMetric = (index: number) => {
    setSubmitSuccess(false);
    const updatedMetrics = chargeMetrics.filter((_, i) => i !== index);
    setUserInput((prev) => ({
      ...prev,
      chargeMetrics: updatedMetrics,
    }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check error status and block submit
    setSubmitSuccess(true);
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setUserInput({ ...initialState });
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col px-4 xl:px-0 md:flex-row justify-between gap-8 lg:gap-14"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-0 w-full">
          <div className="col-span-2">
            <div className="grid grid-cols-2">
              <label htmlFor="chargePoints" className={labelStyle}>
                Number of charge points:
              </label>
              <label htmlFor="chargingPower" className={labelStyle}>
                Charging power of charge points:
              </label>
            </div>
            {chargeMetrics.map((metric, index) => (
              <div key={index} className="grid grid-cols-2 mb-2">
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="chargePoints"
                    value={metric.chargePoints.value}
                    onChange={(e) => handleOnChange(e, index)}
                    className={inputStyle}
                    min={0}
                  />
                  {metric.chargePoints.error && (
                    <span className={errorStyle}>{genericError}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <div>
                    <div>
                      <input
                        type="number"
                        name="chargingPower"
                        value={metric.chargingPower.value}
                        onChange={(e) => handleOnChange(e, index)}
                        className={inputStyle}
                        min={0}
                      />
                      <span className={spanStyle}>kW</span>
                    </div>
                    {metric.chargingPower.error && (
                      <span className={errorStyle}>{genericError}</span>
                    )}
                  </div>

                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveChargeMetric(index)}
                      className="text-lg bg-red-500 text-neutral-100 ml-3 mt-3 px-2 rounded-md self-start"
                    >
                      X
                    </button>
                  )}
                </div>
              </div>
            ))}
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
                value={arrivalProbability.value}
                onChange={handleOnChange}
                className={inputStyle}
                min={0}
              />
              <span className={spanStyle}>%</span>
            </div>
            {arrivalProbability.error && (
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
                value={carConsumption.value}
                onChange={handleOnChange}
                className={inputStyle}
                min={0}
              />
              <span className={spanStyle}>kWh</span>
            </div>
            {carConsumption.error && (
              <span className={errorStyle}>{genericError}</span>
            )}
          </div>
        </div>
        <div className="flex self-center md:self-start items-center md:flex-col gap-3 md:w-1/3 lg:w-1/4">
          <button
            type="reset"
            onClick={handleReset}
            className="text-sm font-medium rounded-full bg-neutral-200 text-neutral-600 px-4 py-1"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleAddChargeMetric}
            className="text-sm font-medium rounded-full bg-amber-500 text-neutral-900 px-4 py-1"
          >
            Create charge points
          </button>
          <button
            type="submit"
            className="text-sm font-medium rounded-full bg-gray-900 text-neutral-100 px-4 py-1"
          >
            Submit
          </button>
        </div>
      </form>
      <Results submitSuccess={submitSuccess} />
    </>
  );
};
