import React from 'react';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  labelClassName?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange, labelClassName }) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex items-center justify-between cursor-pointer w-full group">
      <span className={`text-sm font-medium transition-colors ${labelClassName || 'text-slate-300'}`}>
        {label}
      </span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          onChange={handleToggle}
        />
        <div className="block w-10 h-5 rounded-full bg-slate-600 peer-checked:bg-cyan-500 group-hover:bg-slate-500 transition-colors duration-200 ease-in-out"></div>
        <div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></div>
      </div>
    </label>
  );
};
