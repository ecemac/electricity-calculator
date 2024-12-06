export const CHARGE_POINTS = 20;
export const CHARGING_POWER = 11;
export const ARRIVAL_PROBABILITY = 100;
export const CAR_CONSUMPTION = 18;

export const hourlyData = [
  { hour: '00:00', totalPower: 50, usedChargePoints: 10 },
  { hour: '01:00', totalPower: 100, usedChargePoints: 12 },
  { hour: '02:00', totalPower: 75, usedChargePoints: 8 },
  { hour: '03:00', totalPower: 200, usedChargePoints: 6 },
  { hour: '04:00', totalPower: 150, usedChargePoints: 5 },
  { hour: '05:00', totalPower: 80, usedChargePoints: 4 },
  { hour: '06:00', totalPower: 170, usedChargePoints: 8 },
  { hour: '07:00', totalPower: 220, usedChargePoints: 15 },
  { hour: '08:00', totalPower: 200, usedChargePoints: 18 },
  { hour: '09:00', totalPower: 90, usedChargePoints: 20 },
  { hour: '10:00', totalPower: 150, usedChargePoints: 19 },
  { hour: '11:00', totalPower: 130, usedChargePoints: 17 },
  { hour: '12:00', totalPower: 180, usedChargePoints: 15 },
  { hour: '13:00', totalPower: 200, usedChargePoints: 16 },
  { hour: '14:00', totalPower: 210, usedChargePoints: 18 },
  { hour: '15:00', totalPower: 180, usedChargePoints: 20 },
  { hour: '16:00', totalPower: 150, usedChargePoints: 15 },
  { hour: '17:00', totalPower: 190, usedChargePoints: 10 },
  { hour: '18:00', totalPower: 220, usedChargePoints: 12 },
  { hour: '19:00', totalPower: 170, usedChargePoints: 14 },
  { hour: '20:00', totalPower: 200, usedChargePoints: 10 },
  { hour: '21:00', totalPower: 90, usedChargePoints: 8 },
  { hour: '22:00', totalPower: 120, usedChargePoints: 6 },
  { hour: '23:00', totalPower: 140, usedChargePoints: 5 },
];

export const chargingEventsData = [
  { period: 'Daily', events: 20 },
  { period: 'Weekly', events: 140 }, // 20*7
  { period: 'Monthly', events: 600 }, // 20*30
  { period: 'Yearly', events: 7300 }, // 20*365
];
