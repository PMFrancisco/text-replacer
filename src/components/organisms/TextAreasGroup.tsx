import React from 'react';
import { TagTextarea } from '../molecules/TagTextarea';
import { Button } from '../atoms/Button';
import { Textarea } from '../atoms/Textarea';

export const TextAreasGroup: React.FC = () => {
  const [text, setText] = React.useState<string>(""); 
  const [replacedText, setReplacedText] = React.useState<string>("");  
  const [tag, setTag] = React.useState<string>("");
  const [textAreas, setTextAreas] = React.useState<{ tag: string, text: string }[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const handleNewTextChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextAreas = [...textAreas];
    newTextAreas[index].text = e.target.value;
    setTextAreas(newTextAreas);
  };

  const handleNewTag = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTag(e.target.value);

  const handleReplace = () => {
    let updatedText = text;

    textAreas.forEach(area => {
      const escapedTag = area.tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
      const regex = new RegExp(escapedTag, 'g'); 
      updatedText = updatedText.replace(regex, area.text); 
    });

    setReplacedText(updatedText);
  }

  const createTextArea = () => {
    const bracketedTag = `[${tag}]`;
    setTextAreas([...textAreas, { tag: bracketedTag, text: '' }]);
  };

  return (
    <div>
      <Textarea placeholder="Enter text with tags here..." onChange={handleTextChange} />

      {textAreas.map((area, index) => (
        <TagTextarea
          key={index}
          tag={area.tag}
          value={area.text}
          onChange={(e) => handleNewTextChange(index, e)}
        />
      ))}

      <Textarea placeholder="Set new tag here..." onChange={handleNewTag} />

      <Button onClick={createTextArea} label="New tag" />
      <Button onClick={handleReplace} label="Replace" />

      <p className="whitespace-pre-line">Replaced Text: {replacedText}</p>
    </div>
  );
}
