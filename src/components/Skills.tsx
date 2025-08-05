'use client';

import { FiCode, FiDatabase, FiServer, FiShield, FiTool, FiAward } from 'react-icons/fi';
import { useMultipleScrollAnimations } from '../hooks/useScrollAnimation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "C++", "Java"]
    },
    {
      title: "Frontend Development",
      icon: <FiCode />,
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Redux", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      icon: <FiDatabase />,
      skills: ["MongoDB", "MySQL", "SQLite", "PostgreSQL", "Mongoose"]
    },
    {
      title: "Tools & Technologies",
      icon: <FiTool />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "Firebase", "AWS", "Vercel"]
    },
    {
      title: "Cybersecurity",
      icon: <FiShield />,
      skills: ["Network Security", "Penetration Testing", "Wireshark", "Burp Suite", "Nmap", "Metasploit"]
    }
  ];

  // Track visibility of header and skill categories
  const { visibilityStates, setElementRef } = useMultipleScrollAnimations(skillCategories.length + 1, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: false,
  });

  return (
    <section id="skills">
      <div className="container">
        <div 
          ref={setElementRef(0)}
          className={`text-center mb-12 transform transition-all duration-800 ease-out ${
            visibilityStates[0] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-4">My Skills</h2>
          <p className="text-secondary-text w-max-2xl mx-auto">
            I specialize in modern web technologies and have expertise across the full development stack.
          </p><br></br>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              ref={setElementRef(index + 1)}
              className={`card animate-fadeInUp transform transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 ${
                visibilityStates[index + 1] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: visibilityStates[index + 1] ? `${index * 150}ms` : '0ms',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-color rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-pill transform transition-all duration-300 hover:scale-110"
                    style={{
                      animationDelay: visibilityStates[index + 1] ? `${(index * 150) + (skillIndex * 50)}ms` : '0ms'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16 className= section-padding">
          <div 
            ref={setElementRef(skillCategories.length + 1)}
            className={`text-center mb-8 transform transition-all duration-800 ease-out ${
              visibilityStates[skillCategories.length + 1] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <p className="text-secondary-text">
              Notable accomplishments and recognitions in my professional journey.
            </p><br></br>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <FiAward className="text-white" size={20} />
                </div>
                <div className="px-4">
                  <h4 className="font-semibold">Hackathon Finalist</h4>
                  <p className="text-sm text-secondary-text">Google Office, 2025</p>
                </div>
              </div>
              <p className="text-secondary-text text-sm">
                Reached the final round in a prestigious national-level hackathon competition at Google Office.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <FiAward className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">4-Star Python Rating</h4>
                  <p className="text-sm text-secondary-text">HackerRank</p>
                </div>
              </div>
              <p className="text-secondary-text text-sm">
                Achieved 4-star rating in Python programming on HackerRank platform, demonstrating strong algorithmic skills.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Level */}
        <div className="mt-16">
          <div 
            ref={setElementRef(skillCategories.length + 2)}
            className={`text-center mb-8 transform transition-all duration-800 ease-out ${
              visibilityStates[skillCategories.length + 2] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Experience Levels</h3>
            <p className="text-secondary-text">
              My proficiency across different technology areas.
            </p><br></br>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { skill: "Frontend Development", level: 90, color: "from-blue-500 to-blue-600" },
              { skill: "Backend Development", level: 85, color: "from-green-500 to-green-600" },
              { skill: "AI/ML Integration", level: 80, color: "from-purple-500 to-purple-600" }
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <h4 className="font-semibold mb-4">{item.skill}</h4>
                <div className="relative w-full h-3 bg-secondary-bg rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-secondary-text mt-2">{item.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;