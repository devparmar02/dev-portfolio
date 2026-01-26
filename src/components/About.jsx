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
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6 relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header */}
        <div ref={headingRef} className="mb-20 animate-fadeInUp">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/50 bg-amber-500/10 mb-6">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Who I Am</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">About</h2>
          <p className="text-xl text-amber-500 font-light tracking-wide">My journey and background</p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a full-stack developer driven by a simple philosophy: <span className="font-semibold text-amber-500">"Code is a tool; solving the problem is the goal."</span>
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My technical journey is defined by <span className="font-semibold text-amber-500">constant learning</span>. Whether it's solving algorithmic problems or diving deep into emerging technologies, I'm always upgrading my skills.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently finalizing my B.Tech while mastering Full Stack Development and building real-world applications that demonstrate my ability to turn complex ideas into working products.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
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
                  className={`p-6 rounded-lg border transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fadeInUp ${
                    index === activeStep
                      ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'border-amber-700/20 hover:border-amber-600/40 bg-slate-800/50 hover:bg-slate-800/80'
                  }`}
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-amber-500 font-serif">{milestone.title}</h3>
                      {milestone.institution && (
                        <p className="text-gray-400 text-sm mt-1">{milestone.institution}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-2">{milestone.date}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 transition-all duration-300 ${
                      index <= activeStep
                        ? 'bg-amber-500 border-amber-500 scale-125'
                        : 'border-amber-700/40 bg-slate-800'
                    }`} />
                  </div>
                  {index === activeStep && (
                    <p className="text-gray-300 mt-4 text-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>{milestone.description}</p>
                  )}
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
