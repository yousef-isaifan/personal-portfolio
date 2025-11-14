"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", color: "from-blue-400 to-blue-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", color: "from-gray-700 to-gray-900", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Python", color: "from-green-400 to-blue-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", color: "from-blue-500 to-blue-700", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "FastAPI", color: "from-teal-400 to-teal-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Flutter", color: "from-blue-400 to-cyan-400", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", color: "from-green-500 to-green-700", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", color: "from-orange-500 to-red-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const cardWidth = 144 + 25;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newScrollLeft = 
        direction === "left" 
          ? container.scrollLeft - cardWidth
          : container.scrollLeft + cardWidth;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const autoScroll = () => {
      if (!isAutoScrolling || !container) return;

      const halfScroll = container.scrollWidth / 2;
      
      // Seamless infinite loop - when we reach halfway, reset to start
      if (container.scrollLeft >= halfScroll - 1) {
        container.scrollLeft = 0;
      } else {
        // Scroll one card at a time
        container.scrollTo({
          left: container.scrollLeft + cardWidth,
          behavior: "smooth"
        });
      }
    };

    if (isAutoScrolling) {
      // Auto-scroll every 2 seconds (cooldown between each card)
      intervalId = setInterval(autoScroll, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoScrolling, cardWidth]);

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="group text-4xl font-bold text-gray-800 mb-3 inline-block relative cursor-default">
            Skills & Technologies
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4">Technologies I work with</p>
        </div>
        
        <div className="relative group/container flex items-center gap-2 md:gap-4">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 p-2 md:p-3 bg-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110 hover:bg-blue-50 z-20"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative flex-1 min-w-0">
            <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scroll container */}
            <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <div className="flex gap-6 px-4 py-4">
              {/* Duplicate skills to loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative flex-shrink-0 bg-white border-2 border-gray-200 rounded-2xl w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${(index % skills.length) * 0.05}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative w-16 h-16 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="relative text-gray-800 font-bold text-center px-2 text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 p-2 md:p-3 bg-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110 hover:bg-blue-50 z-20"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
