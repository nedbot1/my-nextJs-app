// import Article from "./components/artical";
// const Articles = [
//   {
//     articleTitle: "Sherab says 'Good Morning, Free Money For Everyone!'",
//     articleParagraphs: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
//       "Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
//       "Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales.",
//     ],
//   },
//   {
//     articleTitle: "What goes around, comes around",
//     articleParagraphs: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
//       "Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
//     ],
//   },
//   {
//     articleTitle: "Love is in the air",
//     articleParagraphs: [
//       "Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
//     ],
//   },
// ];

// export default function Home() {
//   return (
//     <>
//       {Articles.map((article) => {
//         return (
//           <Article
//             title={article.articleTitle}
//             paragraphs={article.articleParagraphs}
//           />
//         );
//       })}
//     </>
//   );
// }

// import Word from "./components/words";

// async function getData() {
//   const res = await fetch(
//     "https://api.dictionaryapi.dev/api/v2/entries/en/phone"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();

//   if (
//     !Array.isArray(data) ||
//     data.length === 0 ||
//     !data[0].phonetics ||
//     !data[0].meanings
//   ) {
//     throw new Error("Invalid data format");
//   }

//   return data[0];
// }

// export default async function Home() {
//   let wordData = null;
//   try {
//     wordData = await getData();
//     console.log(wordData);
//   } catch (error) {
//     console.error(error);
//   }

//   return (
//     <>
//       {wordData && (
//         <Word
//           word={wordData.word}
//           phonetic={wordData.phonetics[0]?.text}
//           meaning={wordData.meanings[0]?.definitions[0]?.definition}
//         />
//       )}
//     </>
//   );
// }

// const BASE_URL = "https://api.scripture.api.bible";
// const API_KEY = process.env.API_KEY;
// async function getData() {
//   try {
//     const res = await fetch(BASE_URL + "/v1/bibles", {
//       headers: {
//         "Content-Type": "application/json",
//         "api-key": API_KEY,
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw the error to handle it in the caller
//   }
// }
// export default async function Home() {
//   try {
//     const data = await getData();
//     console.log(data);
//     return (
//       <div className="text-4xl text-white">
//         <div>{data.data.map((x) => x.name)}</div>
//       </div>
//     );
//   } catch (error) {
//     // Handle the error, e.g., show an error message to the user
//     console.error("Failed to fetch data:", error);
//     return <div className="text-4xl text-white">error</div>;
//   }
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("HELLO");
  const [error, setError] = useState("");

  const handleDelete = (index) => {
    const newQuotes = [...quotes];
    newQuotes.splice(index, 1);
    setQuotes(newQuotes);
  };

  const handleSave = () => {
    if (text.trim() === "") {
      setError("Input cannot be empty !!!");
      return;
    }

    const newQuotes = quotes.concat([text]);
    setQuotes(newQuotes);
    setText("");
    setError("");
  };

  return (
    <div className="mx-auto w-fit mt-80 ">
      <div>MY TO DOS </div>
      <div className="text-4xl text-cyan-500 text-center">
        {quotes.map((quote, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <p>{quote}</p>
              <button
                className="text-sm text-white  border-red rounded px-2 bg-red-600 hover:bg-red-400"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="text-8xl text-green-500 text-center mt-12">{text}</div>
      <input
        className="text-2xl text-black mt-12 px-2"
        placeholder="whatz on your mind"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="text-2xl ml-8 font-bold px-2 rounded bg-cyan-400 hover:bg-cyan-300"
        onClick={handleSave}
      >
        Save Text
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <Link href="/second-page">
        <h1 className="text-blue-500 mt-4">Go to Another Page</h1>
      </Link>
    </div>
  );
}
