import React, { useState } from 'react';
import { Card } from './Card';

const LOADER_STRING = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/4lpaca-pin/Arceney/refs/heads/main/main.luau"))()';

export const LoaderCard: React.FC = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(LOADER_STRING).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Card title="Script Loader">
      <p className="text-sm text-slate-400 mb-4">
        To use these features in-game, copy the loader script below and execute it in your game's script executor.
      </p>
      <div className="bg-slate-900 rounded-md p-3 flex items-center justify-between font-mono text-sm overflow-hidden">
        <code className="text-cyan-300 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {LOADER_STRING}
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy script loader command"
          className={`ml-4 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 ${
            copyButtonText === 'Copied!'
              ? 'bg-green-500 text-white'
              : 'bg-cyan-500 hover:bg-cyan-600 text-white'
          }`}
        >
          {copyButtonText}
        </button>
      </div>
    </Card>
  );
};
