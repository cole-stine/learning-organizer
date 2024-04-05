import React, { useState } from 'react';
import './TextInputWithButton.css'; // Make sure to have a corresponding CSS file for styling

function TextInputWithButton() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(false); // Reset error state when input changes
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue(''); // Clear input field after adding to list
    } else {
      setError(true);
    }
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={error ? 'error' : ''}
        placeholder="Enter text..."
      />
      <button onClick={handleButtonClick}>Add to List</button>
      {error && <p className="error-message">Please enter some text</p>}
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextInputWithButton;