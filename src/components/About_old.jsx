import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [activeStep, setActiveStep] = useState(2);
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  const contentRef = useScrollAnimation({ threshold: 0.15 });

  const milestones = [
    { 
      id: 0, 
      title: "Secondary School (10th)", 
      institution: "State Board",
      date: "2019", 
      description: "Built strong foundations in Science and Mathematics." 
    },
    { 
      id: 1, 
      title: "Higher Secondary (12th)", 
      institution: "Science Stream",
      date: "2021", 
      description: "Specialized in Physics, Chemistry, and Mathematics." 
    },
    { 
      id: 2, 
      title: "B.Tech Information Technology", 
      institution: "ITM SLS Baroda University", 
      date: "2027 (Expected)", 
      description: "Pursuing degree with focus on Full Stack Development and emerging technologies." 
    },
    { 
      id: 3, 
      title: "Internship & Projects", 
      date: "Present",
      description: "Building production-grade applications and expanding my professional experience."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 relative" id="about">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div ref={headingRef} className="mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-xl text-gray-600 font-light">My journey and background</p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a full-stack developer driven by a simple philosophy: <span className="font-semibold">"Code is a tool; solving the problem is the goal."</span>
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My technical journey is defined by <span className="font-semibold">constant learning</span>. Whether it's solving algorithmic problems or diving deep into emerging technologies, I'm always upgrading my skills.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently finalizing my B.Tech while mastering Full Stack Development and building real-world applications that demonstrate my ability to turn complex ideas into working products.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open source, and staying updated with industry trends.
            </p>
          </div>

          {/* Right: Timeline */}
          <div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.id}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                    index === activeStep
                      ? 'bg-gray-50 border-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                      {milestone.institution && (
                        <p className="text-gray-600 text-sm mt-1">{milestone.institution}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-2">{milestone.date}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 ${
                      index <= activeStep
                        ? 'bg-gray-900 border-gray-900'
                        : 'border-gray-300 bg-white'
                    }`} />
                  </div>
                  {index === activeStep && (
                    <p className="text-gray-600 mt-4 text-sm">{milestone.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
          {/* Left: Image */}
          <div className="relative group">
            <img 
              src="/image.png" 
              alt="Dev Parmar" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-800 shadow-2xl mx-auto lg:mx-0"
            />
          </div>

          {/* Right: Bio Text */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed bg-gray-800/50 p-8 rounded-2xl border border-white/5 transition-all duration-500">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {milestones[activeStep].title}
              </h3>
              <p className="text-cyan-400 font-medium mb-4">
                {milestones[activeStep].institution} | <span className="text-gray-500 text-sm">{milestones[activeStep].date}</span>
              </p>
              
              {activeStep === 2 ? (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    I am driven by a simple philosophy: <span className="italic text-white">"Code is just a tool; solving the problem is the goal."</span>
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    My technical journey is defined by <strong className="text-gray-300">constant learning</strong>. Whether it's solving 100+ DSA problems to sharpen my logic or diving deep into <strong className="text-gray-300">AI/ML</strong> to stay ahead of the curve, I am always upgrading my skills.
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Currently, I'm finalizing my B.Tech at <strong className="text-gray-300">ITM SLS Baroda University</strong> while mastering <strong className="text-gray-300">Full Stack Development</strong> and building real-world apps—like a Parking Management System and Travel Platforms—that prove my ability to turn complex ideas into working products.
                  </p>
                </div>
              ) : (
                <p className="text-gray-400">
                  {milestones[activeStep].description}
                </p>
              )}
            </div>
            
            <p className="text-sm text-gray-500 italic border-t border-gray-700 pt-4 mt-4">
              * Click the timeline dots below to see my journey.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-12 pt-12 border-t border-gray-800/50">
          <div className="relative px-4">
            {/* Gray Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 rounded-full mx-4" />
            
            {/* Cyan Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] -translate-y-1/2 rounded-full transition-all duration-500 ease-out mx-4"
              style={{ width: `${(activeStep / (milestones.length - 1)) * 100}%` }}
            />

            {/* Dots */}
            <div className="relative flex justify-between items-center w-full">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.id} 
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`
                      w-6 h-6 rounded-full border-4 transition-all duration-300 z-10 relative
                      ${index <= activeStep 
                        ? 'bg-cyan-500 border-gray-900 shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-125' 
                        : 'bg-gray-800 border-gray-700 group-hover:bg-gray-600'}
                    `}
                  >
                     <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                        {milestone.date}
                      </span>
                    </div>
                  </div>
                  <span 
                    className={`
                      mt-4 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 font-bold
                      ${index === activeStep ? 'text-cyan-400' : 'text-gray-500 group-hover:text-gray-400'}
                    `}
                  >
                    {index === 0 ? "10th" : index === 1 ? "12th" : index === 2 ? "College" : "Work"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
