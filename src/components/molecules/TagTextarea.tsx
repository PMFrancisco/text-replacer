import React from 'react';
import { Textarea } from '../atoms/Textarea';

interface TagTextareaProps {
  tag: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TagTextarea: React.FC<TagTextareaProps> = ({ tag, value, onChange }) => (
  <Textarea
    value={value}
    placeholder={`Enter text for tag ${tag} here...`}
    onChange={onChange}
  />
);
