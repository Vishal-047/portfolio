'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: "🐙",
      url: "https://github.com/Vishal-047",
      label: "GitHub"
    },
    {
      icon: "💼",
      url: "https://www.linkedin.com/in/vishal0407",
      label: "LinkedIn"
    },
    {
      icon: "📧",
      url: "mailto:vishalrw007@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Vishal Singh</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer & Cybersecurity Enthusiast passionate about creating innovative solutions 
              and contributing to meaningful projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 vishalrw007@gmail.com</p>
              <p>📱 +91 7355752539</p>
              <p>📍 Sahbajganj Sahjanwa, Gorakhpur 273209</p>
            </div>
            <div className="pt-4">
              <h5 className="font-semibold mb-2">Availability</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <p>✅ Full-time opportunities</p>
                <p>✅ Freelance projects</p>
                <p>✅ Collaborations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Vishal Singh. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>using Next.js & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 