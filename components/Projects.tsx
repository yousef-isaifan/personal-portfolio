export default function Projects() {
  const projects = [
    {
      title: "Tariqi Navigation – Checkpoint Status System",
      description: "Graduation project featuring real-time checkpoint updates using Telethon and FastAPI with LLM-based entity recognition. Delivered a comprehensive cross-platform solution including a Flutter mobile app with Firebase live updates and an Angular admin panel.",
      technologies: ["Python", "FastAPI", "Telethon", "LLM", "Flutter", "Firebase", "Angular"],
      link: "#"
    },
    {
      title: "Intelligent Chatbot Project",
      description: "Built an interactive chatbot in Python using NLP for natural conversations. Implemented preprocessing, intent recognition, and response generation pipelines. Improved accuracy with transformer models using TensorFlow/Keras and NLP libraries.",
      technologies: ["Python", "NLP", "TensorFlow", "Keras", "Transformers"],
      link: "#"
    }
  ];

  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
