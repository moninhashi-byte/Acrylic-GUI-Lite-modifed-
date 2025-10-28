
import React from 'react';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  labelClassName?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange, labelClassName }) => {
  const handleToggle = () => {
    onChange(!enabled);
  };

  return (
    <label
      className="flex items-center justify-between cursor-pointer w-full group"
      onClick={handleToggle}
    >
      <span className={`text-sm font-medium transition-colors ${labelClassName || 'text-slate-300'}`}>
        {label}
      </span>
      <div className="relative">
        <div className={`block w-10 h-5 rounded-full transition-colors duration-200 ease-in-out ${enabled ? 'bg-cyan-500' : 'bg-slate-600 group-hover:bg-slate-500'}`}></div>
        <div className={`dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </div>
    </label>
  );
};
