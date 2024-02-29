"use client";

import React, { useState } from "react";
import Word from "../components/words";

async function getData(word) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

export default function Home() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getData(word);
      setWordData(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <input
        className="text-black px-2 ml-4"
        type="text"
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Enter a word"
      />
      <button
        className="ml-4, mt-2 text-2xl ml-8 font-bold px-2 rounded bg-cyan-400 hover:bg-cyan-300"
        onClick={handleSearch}
      >
        Search
      </button>

      {wordData && (
        <Word
          word={wordData.word}
          phonetic={wordData.phonetics[0]?.text}
          meaning={wordData.meanings[0]?.definitions[0]?.definition}
        />
      )}
    </>
  );
}
