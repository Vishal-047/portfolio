'use client';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/vishal-singh-cv.pdf';
    link.download = 'Vishal-Singh-CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-10 animate-fadeInUp">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-blue-300 text-sm font-medium">🚀 Available for opportunities</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text text-shadow">Vishal Singh</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gray-300 font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Software Developer & Cybersecurity Enthusiast
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Enthusiastic, detail-focused software developer passionate about web technologies 
                and cybersecurity, eager to contribute to innovative projects that make a difference.
              </p>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📞</span>
                </div>
                <span className="text-lg">+91 7355752539</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📧</span>
                </div>
                <span className="text-lg">vishalrw007@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📍</span>
                </div>
                <span className="text-lg">Sahbajganj Sahjanwa, Gorakhpur 273209</span>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={handleDownloadCV}
                className="btn-primary flex items-center space-x-3 animate-pulse-glow"
              >
                <span className="text-2xl">📥</span>
                <span>Download CV</span>
              </button>
              <a 
                href="#contact" 
                className="btn-secondary flex items-center space-x-3"
              >
                <span>Get In Touch</span>
                <span className="text-xl">→</span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Vishal-047" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="text-2xl">🐙</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vishal0407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Enhanced Right side - Visual element */}
          <div className="hidden lg:block animate-slideInRight">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute inset-0">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full opacity-10 blur-3xl animate-float"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 blur-2xl animate-float animation-delay-2000"></div>
              </div>
              
              {/* Main visual container */}
              <div className="relative z-10">
                <div className="w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center animate-float">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse-glow">
                      <span className="text-white text-4xl font-bold">VS</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Vishal Singh</h3>
                      <p className="text-gray-300">Full Stack Developer</p>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse animation-delay-2000"></div>
                      <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse animation-delay-4000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 