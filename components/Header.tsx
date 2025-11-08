import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <Image
            src="/profile.svg"
            alt="Yousef Isaifan"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg bg-white"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Yousef Isaifan
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Software Engineer | BSc in Computer Science
        </p>
      </div>
    </header>
  );
}
