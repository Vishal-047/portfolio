'use client';
import Image from 'next/image';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  });

  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

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
    <>
    <section 
      id="hero" 
      className="section-padding pt-20 sm:pt-24 lg:pt-16"
      ref={heroRef}
    >
      <div className="container">
        <div className="grid-12 items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div 
            className={`col-span-12 lg:col-span-7 order-2 lg:order-1 transition-all duration-1000 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            ref={textRef}
          >
            {/* Status Pill */}
            <div className={`mb-4 sm:mb-6 text-center lg:text-left transition-all duration-700 delay-200 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <span className="status-pill animate-pulse">Available for Work</span>
            </div>

            {/* Main Heading */}
            <h1 className={`mb-4 sm:mb-6 text-center lg:text-left transition-all duration-800 delay-300 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}>
              Hi, I&apos;m <span className="text-gradient animate-pulse">Vishal Singh</span>.
              <br />
              <span className={`inline-block transition-all duration-1000 delay-500 ${
                textVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                A Full Stack Developer and Cybersecurity Enthusiast Building
                Impactful Digital Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className={`text-lg sm:text-xl mb-6 sm:mb-8 text-secondary-text text-center lg:text-left max-w-none lg:max-w-2xl mx-auto lg:mx-0 transition-all duration-900 delay-600 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              I'm a motivated learner dedicated to building user-focused web
              applications and exploring the world of digital security. I blend
              curiosity with modern technologies to create robust, secure, and
              engaging experiences for diverse users.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start transition-all duration-1000 delay-700 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}>
              <button 
                onClick={scrollToProjects} 
                className="btn-primary w-full sm:w-auto min-h-[48px] touch-manipulation transform hover:scale-105 transition-all duration-300"
              >
                View My Work
                <FiArrowDown className="animate-bounce" />
              </button>
              <button 
                onClick={handleDownloadCV} 
                className="btn-secondary w-full sm:w-auto min-h-[48px] touch-manipulation transform hover:scale-105 transition-all duration-300"
              >
                Download CV
                <FiDownload />
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-1000 delay-800 ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <a 
                href="https://github.com/Vishal-047"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vishal0407"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:vishalrw007@gmail.com"
                className="p-3 sm:p-3 rounded-full bg-secondary-bg shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation transform hover:scale-110"
                aria-label="Email Contact"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div 
            className={`col-span-12 lg:col-span-5 order-1 lg:order-2 transition-all duration-1000 delay-400 ${
              imageVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-95'
            }`}
            ref={imageRef}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto lg:ml-auto">
              {/* Circular background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-primary-bg rounded-full"></div>
              </div>

              {/* Profile Photo */}
              <Image
                src="/me.png"
                alt="A professional headshot of Vishal Singh"
                width={500}
                height={500}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-heavy transform hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent-color rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-accent-hover rounded-full opacity-20 animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
  );
};

export default Hero;
