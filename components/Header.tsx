import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 transform transition-all duration-500 hover:scale-110">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <Image
              src="/profile.svg"
              alt="Yousef Isaifan"
              width={160}
              height={160}
              className="relative rounded-full border-4 border-white shadow-2xl bg-white"
              priority
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Yousef Isaifan
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
          Software Engineer | BSc in Computer Science
        </p>
        <div className="flex gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-2 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
