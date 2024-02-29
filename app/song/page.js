"use client";
import React, { useState } from "react";

function Lyrics() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);

  const fetchLyrics = async () => {
    try {
      const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await res.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
      } else {
        setLyrics("Lyrics not found");
      }
    } catch (error) {
      setError("Failed to fetch lyrics");
    }
  };

  return (
    <div>
      <input
        className="text-black pl-2 ml-4"
        type="text"
        placeholder="Enter artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        className="text-black pl-2 ml-4"
        type="text"
        placeholder="Enter song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className=" mt-2 text-2xl ml-8 font-bold px-2 rounded bg-cyan-400 hover:bg-cyan-300"
        onClick={fetchLyrics}
      >
        Get Lyrics
      </button>
      <p className="text-teal mx-auto w-fit mt-5">
        {lyrics && <pre>{lyrics}</pre>}
        {error && <p>{error}</p>}
      </p>
    </div>
  );
}

export default Lyrics;
