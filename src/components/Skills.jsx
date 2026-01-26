import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaGitAlt, FaAndroid, FaFigma, FaPython, FaDatabase, FaJs, FaBook } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiKotlin, SiVite, SiMysql, SiDjango, SiFlask, SiNumpy, SiPandas } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillCategory = ({ title, skills, delay }) => {
  const categoryRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={categoryRef}
      className="mb-12 animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-2xl font-bold text-amber-500 mb-6 font-serif">{title}</h3>
      <div className="flex flex-wrap gap-8">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group p-3 rounded-lg hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/10 animate-fadeInUp"
            style={{ animationDelay: `${delay + (idx * 0.05)}s` }}
            title={skill.name}
          >
            <div className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  
  const frontendSkills = [
    { name: 'React', icon: <FaReact className="text-cyan-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
  ];

  const mobileSkills = [
    { name: 'Android Studio', icon: <FaAndroid className="text-green-500" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-purple-600" /> },
    { name: 'Java', icon: <FaAndroid className="text-orange-600" /> },
  ];

  const toolsSkills = [
    { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
    { name: 'Database Design', icon: <FaDatabase className="text-yellow-600" /> },
  ];

  const pythonSkills = [
    { name: 'Django', icon: <SiDjango className="text-green-700" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-600" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-500" /> },
    { name: 'Pandas', icon: <SiPandas className="text-blue-700" /> },
    { name: 'FastAPI', icon: <FaPython className="text-yellow-600" /> },
    { name: 'Requests', icon: <FaBook className="text-blue-400" /> },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-6 relative overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div ref={headingRef} className="mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/50 bg-amber-500/10 mb-6">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">My Expertise</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">Skills</h2>
          <p className="text-xl text-amber-500 font-light tracking-wide">Technologies and tools I work with</p>
        </div>

        <SkillCategory title="Frontend" skills={frontendSkills} delay={0.1} />
        <SkillCategory title="Backend" skills={backendSkills} delay={0.2} />
        <SkillCategory title="Mobile Development" skills={mobileSkills} delay={0.3} />
        <SkillCategory title="Python Libraries" skills={pythonSkills} delay={0.4} />
        <SkillCategory title="Tools & Design" skills={toolsSkills} delay={0.5} />

        <div className="mt-20 pt-12 border-t border-amber-700/20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-gray-300 leading-relaxed">
            Full-stack developer with expertise in <span className="font-semibold text-amber-500">web and mobile development</span>. Proficient in both frontend and backend technologies, with hands-on experience in building scalable applications using modern frameworks and databases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
