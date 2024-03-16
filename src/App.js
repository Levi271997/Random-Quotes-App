import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {


  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  useEffect(() => {
    // Fetch random quote when component mounts
    fetchRandomQuote();
  }, []);

  const handleNewQuoteClick = () => {
    fetchRandomQuote();
  };

  return (
    <div id="quote-wrapper">
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={handleNewQuoteClick}>New Quote</button>
        
        <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote}" - ${author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet this quote
      </a>
      </div>
    </div>
  );
}

export default App;
