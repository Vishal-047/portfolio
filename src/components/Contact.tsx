'use client';

import { useState } from 'react';
import { FiMail, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <section id="contact" className="footer-bg">
      <div className="container">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Let&apos;s build something great together</h2>
            <p className="text-white/80 w-max-w-2xl mx-auto">
              Ready to start your next project? Get in touch and let&apos;s discuss how I can help bring your ideas to life.
            </p><br></br>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fadeInUp">
              <h3 className="text-white text-xl font-semibold mb-8">Get in Touch</h3><br></br>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-color rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-white/80">vishalrw007@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-color rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiLinkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                    <p className="text-white/80">linkedin.com/in/vishal0407</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-color rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiGithub className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">GitHub</h4>
                    <p className="text-white/80">github.com/Vishal-047</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <br></br><h4 className="text-white font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 gap-4">
                  <a
                    href="https://github.com/Vishal-047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-color transition-all duration-300"
                  >
                    <FiGithub className="text-white" size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vishal0407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-color transition-all duration-300"
                  >
                    <FiLinkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="mailto:vishalrw007@gmail.com"
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-color transition-all duration-300"
                  >
                    <FiMail className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slideInRight">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-color transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-color transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-color transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact; 