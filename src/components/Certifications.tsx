'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiStar, FiAward } from 'react-icons/fi';

const Certifications = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      quote: "Vishal is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Working with Vishal was a great experience. He's not only technically skilled but also a great communicator and team player.",
      name: "Michael Chen",
      title: "Senior Developer",
      company: "Digital Solutions",
      rating: 5
    },
    {
      quote: "Vishal's expertise in modern web technologies helped us build a robust and scalable application. Highly recommended!",
      name: "Emily Rodriguez",
      title: "CTO",
      company: "StartupXYZ",
      rating: 5
    },
    {
      quote: "Professional, reliable, and technically excellent. Vishal exceeded our expectations on every project we worked on together.",
      name: "David Thompson",
      title: "Project Lead",
      company: "Innovation Labs",
      rating: 5
    }
  ];

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

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer full-stack web development, UI/UX design, mobile app development, and technical consulting. I specialize in React, Node.js, and modern web technologies."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines upfront."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, I work remotely with clients worldwide. I use modern collaboration tools to ensure smooth communication and project delivery regardless of location."
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile development process: discovery and planning, design and prototyping, development and testing, and deployment with ongoing support."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, I offer ongoing maintenance and support packages to ensure your application stays up-to-date, secure, and performs optimally."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, Next.js, Node.js, TypeScript, Python, and modern web technologies. I also have experience with cloud platforms like AWS and Firebase."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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