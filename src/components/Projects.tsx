'use client';

import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Eco-Retail: AI-Powered Circular Commerce Platform",
      description: "AI-driven web app for upcycling, sustainable buying, gamified CO₂ savings, and B2B waste analytics. Built for Walmart Sparkathon with advanced computer vision and AI integration.",
      image: "/eco-retail.jpg",
      tags: ["Next.js", "YOLOv8", "OpenAI API", "MongoDB", "AI/ML"],
      github: "https://github.com/Vishal-047/eco_retail",
      live: "#",
      type: "Full Stack"
    },
    {
      title: "Medicare-AI: Healthcare Management Platform",
      description: "AI-powered multi-language health platform for symptom analysis, record management, and real-time notifications. Features Google Gemini AI integration and comprehensive healthcare solutions.",
      image: "/medicare-ai.jpg",
      tags: ["Next.js", "Google Gemini AI", "TypeScript", "MongoDB", "Stripe"],
      github: "https://github.com/Vishal-047/Medicare_AI",
      live: "#",
      type: "Full Stack"
    },
    {
      title: "AI Personal Ergonomic Assistant",
      description: "Flask web app with real-time ergonomic feedback and personalized suggestions. Uses AI to analyze user behavior and provide customized recommendations for better workplace ergonomics.",
      image: "/ergonomic-assistant.jpg",
      tags: ["Flask", "Python", "Google Gemini AI", "WebRTC", "AI/ML"],
      github: "https://github.com/Vishal-047/AI-Personal-Ergonomics-Assistant",
      live: "#",
      type: "Backend"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.",
      image: "/portfolio.jpg",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      github: "https://github.com/Vishal-047/portfolio",
      live: "#",
      type: "Frontend"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-secondary-text w-max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web development, 
            AI integration, and innovative problem-solving.
          </p><br></br>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                {/*  */}
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-color text-white text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3><br></br>
                <p className="text-secondary-text leading-relaxed">
                  {project.description}
                </p><br></br>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary-bg text-secondary-text text-xs font-medium rounded-full border border-border-color"
                    >
                      {tag}
                    </span>
                  ))}
                </div><br></br>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-text hover:text-accent-color transition-colors duration-300"
                  >
                    <FiGithub size={16} />
                    <span className="text-sm">View Code</span>
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary-text hover:text-accent-color transition-colors duration-300"
                    >
                      <FiExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div><br></br>

        {/* Open Source Collaboration Section */}
        <div className="mt-16 text-center">
          <div className="card w-max-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Open Source Collaboration</h3>
            <p className="text-secondary-text mb-6">
              I'm always interested in collaborating on open source projects and contributing to the developer community. 
              Feel free to reach out if you'd like to work together on something exciting!
            </p>
            <a
              href="https://github.com/Vishal-047"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View My GitHub
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 