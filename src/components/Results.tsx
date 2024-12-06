import React from 'react';
import { ChargingValues } from './charts/ChargingValues';
import { ExamplaryDay } from './charts/ExamplaryDay';
import { TotalEnergy } from './charts/TotalEnergy';
import { ChargingEvents } from './charts/ChargingEvents';
import { ChargingMetrics } from './charts/ChargingMetrics';

export const Results = ({ submitSuccess }: { submitSuccess: boolean }) => (
  <>
    {submitSuccess && (
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ChargingValues />
        <ExamplaryDay />
        <TotalEnergy />
        <ChargingEvents />
        <ChargingMetrics />
      </div>
    )}
  </>
);
