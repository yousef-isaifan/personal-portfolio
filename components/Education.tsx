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
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="group text-4xl font-bold text-gray-900 mb-3 inline-block relative cursor-default">
              Education
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Left side - Year badge */}
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-col items-center w-[160px] flex-shrink-0">
                    <div className="w-full h-[60px] flex items-center justify-center px-3 py-2 border-2 border-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 text-blue-600 group-hover:text-white rounded-full text-xs font-bold shadow-md group-hover:shadow-lg text-center leading-tight transition-all duration-300">
                      {edu.period}
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-blue-200 mt-4"></div>
                    )}
                  </div>
                  
                  {/* Right side - Card content */}
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                      {edu.current && (
                        <span className="ml-2 text-xs font-semibold px-2 py-1 bg-green-500 text-white rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs md:hidden">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h2 className="group text-4xl font-bold text-gray-900 mb-3 inline-block relative cursor-default">
              Certifications
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2 bg-blue-600 rounded-lg shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">{cert.provider}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
