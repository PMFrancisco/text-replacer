import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className="px-4 py-1 border-2 border-emerald-400 rounded-l bg-emerald-200 hover:border-emerald-200">
    {label}
  </button>
);
