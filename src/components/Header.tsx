  'use client';

  import { useState, useEffect } from 'react';
  import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for menu icons

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll detection
    useEffect(() => {
      const handleScroll = () => {
        // Set scrolled state if user scrolls more than 10px
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      // Cleanup function to remove the event listener
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items from the "Juan Pablo" design
    const navItems = [
      { name: 'About Me', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experiences', href: '#experience' },
      { name: 'Certifications', href: '#certifications' },
    ];

    // Function to handle smooth scrolling
    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Close the mobile menu after clicking a link
      setIsMenuOpen(false);
    };

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            
            {/* Logo/Name - Left */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Vishal Singh
              </h1>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden md:flex items-center gap-8"> {/* <<< UPDATE: Replaced 'space-x-8' with 'gap-8' for clean, modern spacing */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button - Right */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="border border-slate-300 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-colors duration-300"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu - Dropdown with blur effect */}
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-full mt-px bg-slate-900/80 backdrop-blur-lg shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-200 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full text-center border border-slate-100 text-white px-8 py-2.5 rounded-full hover:bg-white hover:text-slate-300 transition-colors duration-300 font-medium mt-3"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </header>
    );
  };

  export default Header;