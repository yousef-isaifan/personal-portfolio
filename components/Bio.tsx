export default function Bio() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
          </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="text-lg text-gray-700 leading-relaxed space-y-5">
            <p className="animate-fade-in-up">
              Hello! I&apos;m <span className="font-semibold text-blue-600">Yousef Isaifan</span>, a passionate software engineer with a Bachelor&apos;s degree in Computer Science. 
              I specialize in building modern web and mobile applications using cutting-edge technologies.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              With expertise in both frontend and backend development, I enjoy creating efficient, 
              scalable solutions that solve real-world problems. I&apos;m constantly learning and adapting 
              to new technologies to stay at the forefront of software development.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              When I&apos;m not coding, I enjoy exploring new frameworks, contributing to open-source projects, 
              and sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
