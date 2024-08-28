import React from 'react';

interface TextareaProps {
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ value, placeholder, onChange, className }) => (
  <textarea
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`w-full max-w-96 h-32 p-2 border-2 border-gray-300 rounded-lg ${className}`}
  />
);
