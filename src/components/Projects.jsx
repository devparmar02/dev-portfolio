import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAndroid, FaHtml5, FaJs, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiKotlin, SiVite, SiTailwindcss, SiRazorpay, SiJsonwebtokens } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: "NIVAS – Society Management System",
    category: "Full-Stack MERN App",
    description: "Built a comprehensive Full-Stack platform featuring secure RBAC and automated financial workflows. Implemented monthly billing automation using Cron Jobs, integrated Razorpay for digital payments, and developed instant PDF receipt generation. Engineered a real-time visitor tracking and complaint management system.",
    tech: [
      <FaReact className="text-cyan-400" title="React.js" />, 
      <SiVite className="text-purple-400" title="Vite" />,
      <FaNodeJs className="text-green-500" title="Node.js" />, 
      <SiMongodb className="text-green-400" title="MongoDB" />,
      <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />,
      <SiRazorpay className="text-blue-500" title="Razorpay" />,
      <SiJsonwebtokens className="text-slate-300" title="JWT" />
    ],
    github: "https://github.com/devparmar02/nivas-society-management",
    demo: "https://nivas-society-management.vercel.app/",
  },
  
  {
    id: 2,
    title: "UI Generator Agent",
    category: "AI-Powered Web App",
    description: "An AI-integrated UI generator that turns natural language into renderable React code using Llama 3-70B and a sophisticated multi-agent pipeline. It guarantees stable, hallucination-free execution through strict runtime guardrails within a dynamic, real-time developer workspace.",
    tech: [<SiNextdotjs className="text-black dark:text-white" />, <FaReact className="text-cyan-400" />, <SiTailwindcss className="text-teal-400" />],
    github: "https://github.com/devparmar02/UI-Generator", 
    demo: "https://ui-generator-gules.vercel.app/"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "Frontend Web App",
    description: "A high-performance, responsive e-commerce platform built with React and Tailwind CSS that delivers a premium shopping experience. It features secure, authentication-based protected routes, real-time cart management via Context API, and seamless product fetching with infinite scrolling and dynamic search.",
    tech: [<FaReact className="text-cyan-400" />, <SiVite className="text-purple-500" />, <SiTailwindcss className="text-teal-400" />],
    github: "https://github.com/devparmar02/E-Commerce-Dashboard",
    demo: "https://e-commerce-dashboard-lovat-three.vercel.app/" 
  },
  {
    id: 4,
    title: "Viseas Service Platform",
    category: "Full-Stack Web App",
    description: "A comprehensive travel marketplace built with modern web technologies. Features user authentication, real-time booking management, and a seamless user experience. Implemented responsive design and optimized performance for mobile and desktop users.",
    tech: [<FaReact className="text-cyan-400" />, <FaNodeJs className="text-green-500" />, <SiMongodb className="text-green-400" />],
    github: "https://github.com/devparmar02/service-booking-viseas",
  },
  {
    id: 5,
    title: "Parking Management System",
    category: "Mobile Application",
    description: "An Android application that automates parking slot allocation for both admins and users. Streamlines parking operations with real-time updates and efficient resource management. Built with modern mobile development practices.",
    tech: [<FaAndroid className="text-green-400" />, <SiKotlin className="text-purple-500" />], 
    github: "https://github.com/devparmar02/parking-management-system",
  },
  {
    id: 6,
    title: "Airline Booking Web App",
    category: "Web Application",
    description: "An intuitive flight search and booking system. Designed with a focus on user experience, featuring advanced filtering, real-time availability updates, and secure payment integration. Built with clean, maintainable code.",
    tech: [<FaPhp className="text-indigo-400" />, <FaJs className="text-yellow-400" />, <FaHtml5 className="text-orange-500" />],
    github: "https://github.com/devparmar02/airline-booking",
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={cardRef}
      className="animate-fadeInUp group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative rounded-2xl overflow-hidden mb-12 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Card Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm z-10"></div>
        
        {/* Content Container */}
        <div className="p-8 md:p-10 lg:p-12 relative z-20">
          <div className="space-y-4">
            {/* Category Badge */}
            <div className="inline-block w-fit">
              <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/20 text-amber-400 border border-amber-500/50 group-hover:bg-amber-500/30 transition-colors">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-300 leading-relaxed text-base md:text-lg group-hover:text-gray-200 transition-colors">
              {project.description}
            </p>

            {/* Tech Stack Icons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Tech Stack:</span>
              <div className="flex items-center gap-4 flex-wrap">
                {project.tech.map((icon, idx) => (
                  <span 
                    key={idx} 
                    className="text-2xl hover:scale-125 hover:text-amber-400 transition-all duration-300 hover:drop-shadow-lg"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="pt-6 flex flex-wrap gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border-2 border-amber-500 text-amber-400 font-semibold hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 rounded-lg uppercase tracking-wider text-xs"
                >
                  <FaGithub /> Github
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-all duration-300 rounded-lg uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32 px-6 relative overflow-hidden" id="projects">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(217,119,6,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div ref={headingRef} className="mb-24 animate-fadeInUp">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/50 bg-amber-500/10 mb-6">
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">Featured Work</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
            My <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            A showcase of full-stack applications and mobile solutions engineered for real-world impact.
          </p>
        </div>

        {/* List of Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-24 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/devparmar02" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 rounded-lg hover:gap-4 uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-400/50"
          >
            Explore More Projects
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
