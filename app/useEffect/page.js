"use client";

import React, { useState, useEffect } from "react";

function RandomQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };

  const generateQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <h2 className="ml-4, mt-2 text-2xl ml-8">Random Quote:</h2>
      {quote ? (
        <p className="mb-4 mt-2 text-2xl ml-8 text-teal">{quote}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button
        className="ml-4, mt-2 text-2xl ml-8 font-bold px-2 rounded bg-cyan-400 hover:bg-cyan-300"
        onClick={generateQuote}
      >
        Generate Another Quote
      </button>
    </div>
  );
}

export default RandomQuote;
