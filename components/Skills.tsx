export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "PostgreSQL",
    "Emakin",
    "FastAPI",
    "Flutter",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git"
  ];

  return (
    <section className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center shadow-sm"
            >
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
