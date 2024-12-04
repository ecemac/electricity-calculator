import React, { useState } from 'react';

export const Form = () => {
  const [chargePoints, setChargePoints] = useState<number>(20);
  const [chargingPower, setChargingPower] = useState<number>(11);
  const [arrivalProbability, setArrivalProbability] = useState<number>(100);
  const [carConsumption, setCarConsumption] = useState<number>(18);

  const inputContainerStyle = 'flex flex-col w-full items-center';
  const labelStyle = 'text-xs mb-2 text-neutral-900';
  const inputStyle =
    'rounded-md py-2 px-6 text-2xl h-12 text-neutral-600 w-1/3 text-center border border-neutral-200';

  return (
    <div>
      <form action="" className="flex justify-center gap-10">
        <div className={inputContainerStyle}>
          <label htmlFor="charge-points" className={labelStyle}>
            Number of charge points
          </label>
          <input
            type="number"
            id="charge-points"
            name="charge-points"
            value={chargePoints}
            onChange={(e) => setChargePoints(Number(e.target.value))}
            className={inputStyle}
            min={1}
          />
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="charging-power" className={labelStyle}>
            Charging power of charge point
          </label>
          <div>
            <input
              type="number"
              id="charging-power"
              name="charging-power"
              value={chargingPower}
              onChange={(e) => setChargingPower(Number(e.target.value))}
              className={inputStyle}
              min={1}
            />
            <span>kW</span>
          </div>
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="arrival-probability" className={labelStyle}>
            Arrival probability (%20 - %200)
          </label>
          <div>
            {' '}
            <input
              type="number"
              id="arrival-probability"
              name="arrival-probability"
              value={arrivalProbability}
              onChange={(e) => setArrivalProbability(Number(e.target.value))}
              className={inputStyle}
              min={20}
              max={200}
            />
            <span>%</span>
          </div>
        </div>
        <div className={inputContainerStyle}>
          <label htmlFor="car-consumption" className={labelStyle}>
            Consumption of cars
          </label>
          <div>
            <input
              type="number"
              id="car-consumption"
              name="car-consumption"
              value={carConsumption}
              onChange={(e) => setCarConsumption(Number(e.target.value))}
              className={inputStyle}
              min={1}
            />
            <span>kWh</span>
          </div>
        </div>
      </form>
    </div>
  );
};
