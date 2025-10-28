import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-36 px-3 py-2 text-sm text-left bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
        >
          <span>{selectedValue}</span>
          <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10">
            <ul className="py-1">
              {options.map(option => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
