'use client';

import { FiAward } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: "Free Code Camp: Building Website",
      issuer: "Free Code Camp",
      date: "October 2023",
      description: "Comprehensive web development certification covering HTML, CSS, and JavaScript fundamentals.",
      category: "Web Development",
      verified: true
    },
    {
      title: "NPTEL: Cloud Computing",
      issuer: "NPTEL",
      date: "May 2025",
      description: "Advanced cloud computing concepts and implementation strategies for modern applications.",
      category: "Cloud Computing",
      verified: true
    },
    {
      title: "Project Management: Basics",
      issuer: "Project Management Institute",
      date: "October 2023",
      description: "Fundamental project management principles and methodologies for effective team leadership.",
      category: "Project Management",
      verified: true
    }
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section id="certifications" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Certifications & Achievements</h2>
            <p className="text-secondary-text w-max-2xl mx-auto">
              Professional certifications and notable achievements that demonstrate continuous learning and excellence.
            </p><br></br>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent-color rounded-lg flex items-center justify-center">
                    <FiAward className="text-white" size={20} />
                  </div>
                  {cert.verified && (
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-accent-color font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-secondary-text mb-3">{cert.date}</p>
                <p className="text-secondary-text text-sm leading-relaxed">{cert.description}</p>
                
                <div className="mt-4">
                  <span className="px-3 py-1 bg-secondary-bg text-secondary-text text-xs font-medium rounded-full border border-border-color">
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;