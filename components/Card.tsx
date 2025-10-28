
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, className, headerContent }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl shadow-slate-950/50 overflow-hidden w-full ${className}`}>
      <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800/30">
        <h2 className="text-lg font-bold text-slate-100">{title}</h2>
        {headerContent}
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};
