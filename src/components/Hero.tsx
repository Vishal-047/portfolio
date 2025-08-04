'use client';
import { div, section } from 'framer-motion/client';
import Image from 'next/image';

import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/vishal-singh-cv.pdf';
    link.download = 'Vishal-Singh-CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="section-padding">
      <div className="container">
        <div className="grid-12 items-center">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 animate-fadeInUp">
            {/* Status Pill */}
            <div className="mb-6">
              <span className="status-pill">
                Available for Work
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6">
              Hi, I'm <span className="text-gradient">Vishal Singh</span>.
              <br />
              A Full Stack Developer and Cybersecurity Enthusiast Building Impactful Digital Solutions
            </h1>

            {/* Subheading */}
            <p className="text-xl mb-8 text-secondary-text">
            I’m a motivated learner dedicated to building user-focused web applications and exploring the world of digital security. I blend curiosity with modern technologies to create robust, secure, and engaging experiences for diverse users.
            </p><br></br>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="btn-primary"
              >
                View My Work
                <FiArrowDown />
              </button>
              <button
                onClick={handleDownloadCV}
                className="btn-secondary"
              >
                Download CV
                <FiDownload />
              </button>
            </div><br></br>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Vishal-047"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vishal0407"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:vishalrw007@gmail.com"
                className="p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
            <div className="col-span-12 lg:col-span-5 animate-slideInRight">
              <div className="relative w-120 h-200 mx-auto lg:ml-auto">
                
                {/* These are the background "cards" that create the tilted stack effect. Leave them as they are. */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-3 shadow-heavy"></div>

                {/* ▼▼▼ THIS IS THE UPDATE ▼▼▼
                  The placeholder div has been replaced by the next/image component below.
                */}
                <Image
                  src="/me.jpg" // Remember to place your photo here
                  alt="A professional headshot of Vishal Singh"
                  width={500}  // Use the actual width of your image file
                  height={500} // Use the actual height of your image file
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl transform rotate-1 shadow-medium"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-color rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-hover rounded-full opacity-20 animate-float animation-delay-2000"></div>
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero; 