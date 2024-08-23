import { useState } from 'react';
import './App.css';

export default function App() {
  const [text, setText] = useState<string>(""); 
  const [replacedText, setReplacedText] = useState<string>("");  
  const [tag, setTag] = useState<string>("");
  const [textAreas, setTextAreas] = useState<{ tag: string, text: string }[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const handleNewTextChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextAreas = [...textAreas];
    newTextAreas[index].text = e.target.value;
    setTextAreas(newTextAreas);
  };

  const handleNewTag = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTag(e.target.value);

  const handleReplace = () => {
    let updatedText = text;

    // Iterate over each tag in textAreas and replace it with its corresponding text    
    textAreas.forEach(area => {
      
      // Escape any special regex characters in the tag
      const escapedTag = area.tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
      // Create a regex to match the tag
      const regex = new RegExp(escapedTag, 'g'); 
      // Replace all occurrences of the tag
      updatedText = updatedText.replace(regex, area.text); 
    });

    setReplacedText(updatedText);
  }

  // Function to dynamically create new text areas
  const createTextArea = () => {
    // Add brackets around the tag value
    const bracketedTag = `[${tag}]`;
    setTextAreas([...textAreas, { tag: bracketedTag, text: '' }]);
  };

  return (
    <main>
      <textarea 
        placeholder="Enter text with tags here..." 
        onChange={handleTextChange} 
      />

      {textAreas.map((area, index) => (
        <textarea
          key={index}
          placeholder={`Enter text for tag ${area.tag} here...`}
          value={area.text}
          onChange={(e) => handleNewTextChange(index, e)}
        />
      ))}

      <textarea 
        placeholder="Set new tag here..." 
        onChange={handleNewTag} 
      />

      <button onClick={createTextArea}>New tag</button>

      <button onClick={handleReplace}>Replace</button>

      <p>Replaced Text: {replacedText}</p>
    </main>
  );
}
