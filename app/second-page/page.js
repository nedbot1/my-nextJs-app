import Link from "next/link";

export default function AnotherPage() {
  return (
    <div className="mx-auto w-fit mt-80">
      <h1 className="text-4xl text-blue-500 text-center">Another Page</h1>
      <p className="text-2xl text-black text-center mt-8">
        This is another page.
      </p>
      <Link href="http://localhost:3000/">
        <h1 className="text-blue-500 mt-4">Go back to Home</h1>
      </Link>
    </div>
  );
}
