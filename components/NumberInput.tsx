import React from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, min, max }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.value === '' ? min || 0 : parseInt(e.target.value, 10);
    onChange(numValue);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <label htmlFor={label} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={label}
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-24 px-3 py-1.5 text-sm bg-slate-700 text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
      />
    </div>
  );
};
