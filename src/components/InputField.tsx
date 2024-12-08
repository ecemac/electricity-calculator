import React from 'react';

type InputFieldProps = {
  label?: string;
  name: string;
  value: number;
  extraLabel?: string;
  error: boolean;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({
  label,
  name,
  value,
  extraLabel,
  error,
  errorMessage,
  onChange,
}: InputFieldProps) => (
  <div className="flex flex-col">
    {label && (
      <label htmlFor={name} className="text-xs mb-2 text-neutral-900">
        {label}
      </label>
    )}
    <div>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-md py-2 px-6 mr-2 text-2xl h-12 text-neutral-600 w-24 text-center border border-neutral-300"
        min={0}
      />
      {extraLabel && (
        <span className="text-xl text-neutral-900">{extraLabel}</span>
      )}
    </div>
    {error && <span className="text-xs text-red-500 mt-1">{errorMessage}</span>}
  </div>
);
