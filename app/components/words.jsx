export default function Word({ word, phonetic, meaning, example }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {word}
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {phonetic}
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {meaning}
        </h1>
      </div>
    </>
  );
}
