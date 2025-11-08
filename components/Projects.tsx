export default function Projects() {
  const projects = [
    {
      title: "Tariqi Navigation – Checkpoint Status System",
      description: "Graduation project featuring real-time checkpoint updates using Telethon and FastAPI with LLM-based entity recognition. Delivered a comprehensive cross-platform solution including a Flutter mobile app with Firebase live updates and an Angular admin panel.",
      technologies: ["Python", "FastAPI", "Telethon", "LLM", "Flutter", "Firebase", "Angular"],
      link: "https://github.com/yousef-isaifan/Tariqi-Navigation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Chatbot Project",
      description: "Built an interactive chatbot in Python using NLP for natural conversations. Implemented preprocessing, intent recognition, and response generation pipelines. Improved accuracy with transformer models using TensorFlow/Keras and NLP libraries.",
      technologies: ["Python", "NLP", "TensorFlow", "Keras", "Transformers"],
      link: "https://github.com/yousef-isaifan/Chatbot",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Parking Lots Management System",
      description: "Comprehensive parking lots management system designed to efficiently manage parking spaces for employees and drivers. Features include space allocation, tracking, and administration.",
      technologies: ["Management System"],
      link: "https://github.com/yousef-isaifan/ParkingLot",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Hotel Hub",
      description: "Android application for hotel reservation system. Provides a seamless booking experience with intuitive interface for users to browse, book, and manage hotel reservations.",
      technologies: ["Android", "Java/Kotlin"],
      link: "https://github.com/yousef-isaifan/Hotel_Hub",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Intelligent Tic Tac Toe game implementation using MiniMax Backtracking Algorithm. Features an unbeatable AI opponent that makes optimal moves using game theory principles.",
      technologies: ["Algorithm", "MiniMax", "AI"],
      link: "https://github.com/yousef-isaifan/TicTacToe",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 inline-block relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
          </h2>
          <p className="text-gray-600 mt-4">Check out some of my recent work</p>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm px-4 py-1.5 rounded-full font-medium border border-blue-100 hover:border-blue-300 transition-colors"
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
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group/link transition-all"
                  >
                    View Project 
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
