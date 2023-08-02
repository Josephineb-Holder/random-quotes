import { useState } from 'react';
import { quotesList } from './Quotes';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState(' ');
  const quoteslists = quotesList;

  function generateQuotes() {
    const randomNumber = Math.floor(Math.random() * 6);
    setQuotes(quoteslists[randomNumber]);
    console.log(quoteslists[randomNumber]);
    // for (let i = 0; i <= quoteslists.length; i++) {
    //   // console.log(quoteslists[i]);
    //   if (randomNumber === quoteslists.indexOf(quoteslists[i])) {
    //     console.log(quoteslists[i]);
    //   }
    // }
    // console.log(quoteslists);
  }
  return (
    <>
      <h1>hi</h1>
      <button onClick={generateQuotes}>Click Now</button>

      <div className="quote">
        <p className="quotes">{quotes.quote}</p>
        <p className="author">{quotes.author}</p>
      </div>
    </>
  );
}

export default App;
