import { useState } from 'react';
import './App.css';

export default function App() {
  const [text, setText] = useState<string>(""); 
  const [newText, setNewText] = useState<string>("");  
  const [replacedText, setReplacedText] = useState<string>("");  

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const handleNewTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewText(e.target.value);

  const handleReplace = () => {
    const tagPattern = /\[\d+\]/g;
    const tagMatches = text.match(tagPattern);

    if (tagMatches && tagMatches.length > 0) {
      const tag = tagMatches[0];
      const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedTag, 'g');

      setReplacedText(text.replace(regex, newText));
    } else {
  
      setReplacedText(text);
    }
  }

  return (
    <main>
      <textarea placeholder="Enter text with tags here..." onChange={handleTextChange} />
      <textarea placeholder="Enter replacement text here..." onChange={handleNewTextChange} />
      <button onClick={handleReplace}>Replace</button>
      <p>Replaced Text: {replacedText}</p>
    </main>
  );
}
