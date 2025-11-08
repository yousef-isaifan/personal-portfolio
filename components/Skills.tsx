export default function Skills() {
  const skills = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "React", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "Python", color: "from-green-400 to-blue-500" },
    { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
    { name: "Emakin", color: "from-purple-400 to-purple-600" },
    { name: "FastAPI", color: "from-teal-400 to-teal-600" },
    { name: "Flutter", color: "from-blue-400 to-cyan-400" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Git", color: "from-orange-500 to-red-600" }
  ];

  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 inline-block relative">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white border border-gray-200 rounded-xl px-4 py-4 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <span className="relative text-gray-800 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
