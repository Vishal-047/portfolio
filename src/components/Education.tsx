'use client';

import { FiCalendar, FiMapPin, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const experience = [
    {
      title: "Hackathon",
      company: "Google",
      period: "June 2025",
      location: "Gurgaon",
      description: "Participated as a finalist in the 2025 National Level Hackathon, highlighting teamwork and problem-solving skills."
    },
    {
      description: "Practiced cybersecurity using tools like Wireshark, Burp Suite, Nmap, and Metasploit, integrating security best practices into projects."
    },
    {
      description: "Created a Flask-based AI ergonomic assistant to monitor and improve user posture. Worked with technologies such as Next.js, React, Node.js, MongoDB, Python, Flask, OpenAI API, and Google Gemini AI."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      period: "2023-2027",
      location: "Jalandhar, India",
      description: "Pursuing B.Tech in Computer Science and Engineering."
    }
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">My Experience</h2><br></br>
          </div>

          <div className="w-max-3xl mx-auto relative">
            {experience.map((job, index) => (
              <div key={index} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="timeline-line"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="timeline-dot">
                      <FiBriefcase size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                          <p className="text-accent-color font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div className="flex items-center gap-1 text-secondary-text text-sm">
                            <FiCalendar size={14} />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-secondary-text text-sm">
                            <FiMapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondary-text leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Education</h2>
            <p className="text-secondary-text w-max-3xl mx-auto text-center">
              My academic background and qualifications that have shaped my technical expertise.
            </p><br></br>
          </div>

          <div className="w-max-3xl mx-auto relative">
            {education.map((edu, index) => (
              <div key={index} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="timeline-line"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="timeline-dot">
                      <FiBookOpen size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                          <p className="text-accent-color font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div className="flex items-center gap-1 text-secondary-text text-sm">
                            <FiCalendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-secondary-text text-sm">
                            <FiMapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondary-text leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education; 