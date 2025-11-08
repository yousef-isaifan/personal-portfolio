export default function Education() {
  const education = [
    {
      institution: "Birzeit University",
      location: "Birzeit, West Bank",
      degree: "Bachelor of Computer Science",
      period: "Jan 2021 - Feb 2025",
      current: false
    },
    {
      institution: "Birzeit University",
      location: "Birzeit, West Bank",
      degree: "Bachelor of Mechanical Engineering",
      period: "Sep 2019 - Dec 2020",
      current: false
    },
    {
      institution: "Al Jazeerah Schools",
      location: "Riyadh, KSA",
      degree: "Secondary School",
      period: "Jun 2019",
      current: false
    }
  ];

  const certifications = [
    {
      title: "Arabic NLP",
      provider: "Udemy",
      description: "Focused on text preprocessing, classifiers, chatbots, translation (LSTM), and transformers for Arabic."
    },
    {
      title: "Front End Web Developer Nanodegree",
      provider: "Udacity",
      description: "Covered DOM manipulation, async JS, performance optimization, testing, and automation with Parcel."
    }
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Education */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 inline-block relative">
              Education
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {edu.degree}
                      {edu.current && (
                        <span className="ml-3 text-sm font-semibold px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 inline-block relative">
              Certifications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-purple-600">{cert.provider}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
