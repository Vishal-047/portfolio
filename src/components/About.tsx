'use client';

import { FiTarget, FiUsers, FiTrendingUp, FiCode, FiBook, FiGlobe } from 'react-icons/fi';
import { useMultipleScrollAnimations } from '../hooks/useScrollAnimation';

const About = () => {
  // Track visibility of multiple elements in About section
  const { visibilityStates: aboutStates, setElementRef: setAboutRef } = useMultipleScrollAnimations(8, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: false,
  });

  // Track visibility of hobby cards
  const { visibilityStates: hobbyStates, setElementRef: setHobbyRef } = useMultipleScrollAnimations(6, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: false,
  });

  return (
    <>
      {/* About Me Section */}
      <section id="about">
        <div className="container">
          <div className="grid-12 items-center">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-6">
              <h2 
                ref={setAboutRef(0)}
                className={`mb-8 transform transition-all duration-800 ease-out ${
                  aboutStates[0] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                About Me
              </h2>
              <div 
                ref={setAboutRef(1)}
                className={`space-y-6 transform transition-all duration-900 ease-out ${
                  aboutStates[1] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: aboutStates[1] ? '200ms' : '0ms' }}
              >
                <p>
                I&apos;m an enthusiastic learner exploring modern web technologies and cybersecurity. I enjoy building user-centered digital experiences that aim to solve real-world problems and support business growth.
                </p>
                <p>
                Exploring cybersecurity gives me a unique lens to focus on safe, reliable solutions in every project.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest industry trends 
                  to deliver cutting-edge solutions that make a difference.
                </p>
              </div>

              {/* Key Highlights */}
              <div 
                ref={setAboutRef(2)}
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transform transition-all duration-1000 ease-out ${
                  aboutStates[2] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: aboutStates[2] ? '400ms' : '0ms' }}
              >
                <div className="text-center p-4 transform transition-all duration-700 ease-out hover:scale-105">
                  <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTarget className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">Goal-Oriented</h4>
                  <p className="text-sm text-secondary-text">Focused on delivering results that exceed expectations</p>
                </div>
                <div className="text-center p-4 transform transition-all duration-700 ease-out hover:scale-105">
                  <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">Team Player</h4>
                  <p className="text-sm text-secondary-text">Collaborative approach to problem-solving</p>
                </div>
                <div className="text-center p-4 transform transition-all duration-700 ease-out hover:scale-105">
                  <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTrendingUp className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">Growth Mindset</h4>
                  <p className="text-sm text-secondary-text">Always learning and improving skills</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-span-12 lg:col-span-6">
              <div 
                ref={setAboutRef(3)}
                className={`card transform transition-all duration-1000 ease-out ${
                  aboutStates[3] 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-12 scale-95'
                }`}
                style={{ transitionDelay: aboutStates[3] ? '300ms' : '0ms' }}
              >
                <h3 className="text-xl font-semibold mb-6">What I Do</h3>
                <div className="space-y-6">
                  <div 
                    className={`flex items-start space-x-4 transform transition-all duration-700 ease-out ${
                      aboutStates[3] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: aboutStates[3] ? '500ms' : '0ms' }}
                  >
                    <div className="w-8 h-8 bg-accent-color rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 py-2">Web Development</h4>
                      <p className="text-secondary-text">Developing AI-powered, responsive, and scalable web applications using modern frameworks like Next.js, Node.js, and React while following best practices.</p>
                    </div>
                  </div>
                  <div 
                    className={`flex items-start space-x-4 transform transition-all duration-700 ease-out ${
                      aboutStates[3] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: aboutStates[3] ? '700ms' : '0ms' }}
                  >
                    <div className="w-8 h-8 bg-accent-color rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cybersecurity Awareness</h4>
                      <p className="text-secondary-text">Incorporating security best practices and using tools like Wireshark, Burp Suite, Nmap, and Metasploit for vulnerability assessment and protection.</p>
                    </div>
                  </div>
                  <div 
                    className={`flex items-start space-x-4 transform transition-all duration-700 ease-out ${
                      aboutStates[3] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: aboutStates[3] ? '900ms' : '0ms' }}
                  >
                    <div className="w-8 h-8 bg-accent-color rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Problem Solving</h4>
                      <p className="text-secondary-text">Analyzing complex problems and implementing effective solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Hobbies Section */}
      <section className="section-padding">
        <div className="container">
          <div 
            ref={setHobbyRef(0)}
            className={`text-center mb-12 transform transition-all duration-800 ease-out ${
              hobbyStates[0] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="mb-4">Interests & Activities</h2>
            <p className="text-secondary-text w-max-w-2xl mx-auto">
              Beyond coding, here are the activities that fuel my passion for technology and continuous learning.
            </p><br></br>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              ref={setHobbyRef(1)}
              className={`card text-center transform transition-all duration-800 ease-out hover:scale-105 hover:-translate-y-2 ${
                hobbyStates[1] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: hobbyStates[1] ? '100ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-white" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Open Source Contributing</h4>
              <p className="text-sm text-secondary-text">Actively contributing to open source projects and the developer community</p>
            </div>
            <div 
              ref={setHobbyRef(2)}
              className={`card text-center transform transition-all duration-800 ease-out hover:scale-105 hover:-translate-y-2 ${
                hobbyStates[2] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: hobbyStates[2] ? '200ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-white" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Coding & Hackathons</h4>
              <p className="text-sm text-secondary-text">Participating in hackathons and coding competitions to solve real challenges</p>
            </div>
            <div 
              ref={setHobbyRef(3)}
              className={`card text-center transform transition-all duration-800 ease-out hover:scale-105 hover:-translate-y-2 ${
                hobbyStates[3] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: hobbyStates[3] ? '300ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-white" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Learning New Languages</h4>
              <p className="text-sm text-secondary-text">Exploring new programming languages and frameworks to expand my skill set</p>
            </div>
            <div 
              ref={setHobbyRef(4)}
              className={`card text-center transform transition-all duration-800 ease-out hover:scale-105 hover:-translate-y-2 ${
                hobbyStates[4] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: hobbyStates[4] ? '400ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="text-white" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Reading Tech Articles</h4>
              <p className="text-sm text-secondary-text">Staying updated with the latest technology trends and industry insights</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
