export default function Article({ title, paragraphs }) {
  return (
    <>
      <h1 className="text-3xl px-4 md:px-0 md:text-5xl text-center py-8 bg-sky-500 hover:bg-sky-700">
        {title}
      </h1>
      {paragraphs.map((paragraph) => {
        return (
          <p
            className="pb-4 px-4 md:px-16 text-xl first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left"
          >
            {paragraph}
          </p>
        );
      })}
    </>
  );
}
