export default function Projects() {
  const projects = [
    {
      title: "Tariqi Navigation",
      description: "Graduation project featuring real-time checkpoint updates using Telethon and FastAPI with LLM-based entity recognition. Delivered a comprehensive cross-platform solution including a Flutter mobile app with Firebase live updates and an Angular admin panel.",
      technologies: ["Python", "FastAPI", "Telethon", "LLM", "Flutter", "Firebase", "Angular"],
      link: "https://play.google.com/store/apps/details?id=com.tariqi",
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
      technologies: ["Management System", "Java", "JavaFX", "MySQL"],
      link: "https://github.com/yousef-isaifan/ParkingLot",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Hotel Hub",
      description: "Android application for hotel reservation system. Provides a seamless booking experience with intuitive interface for users to browse, book, and manage hotel reservations.",
      technologies: ["Android", "Java", "Firebase"],
      link: "https://github.com/yousef-isaifan/Hotel_Hub",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Intelligent Tic Tac Toe game implementation using MiniMax Backtracking Algorithm. Features an unbeatable AI opponent that makes optimal moves using game theory principles.",
      technologies: ["Algorithm", "MiniMax", "Backtracking", "Java", "JavaFX"],
      link: "https://github.com/yousef-isaifan/TicTacToe",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="group text-5xl font-bold text-gray-800 mb-6 inline-block relative cursor-default">
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">Check out some of my recent work</p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:shadow-3xl hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 flex-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm px-5 py-2 rounded-full font-semibold border-2 border-blue-100 hover:border-blue-400 hover:shadow-md transition-all transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group/link transition-all"
                  >
                    View Project 
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
