'use client';

const About = () => {
  const highlights = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Passionate about creating modern, responsive web applications using cutting-edge technologies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Enthusiastic about security practices and ethical hacking methodologies.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Always eager to learn new technologies and contribute to innovative projects.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "👥",
      title: "Collaboration",
      description: "Strong team player with excellent communication and problem-solving skills.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-200/20 mb-6">
            <span className="text-blue-600 text-sm font-medium">👨‍💻 About Me</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Who I Am</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            A passionate software developer with a unique blend of technical expertise and creative problem-solving skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Image and personal info */}
          <div className="space-y-10 animate-slideInLeft">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-float">
                <div className="w-88 h-88 bg-white rounded-3xl flex items-center justify-center shadow-inner">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl mx-auto flex items-center justify-center shadow-xl animate-pulse-glow">
                      <span className="text-white text-3xl font-bold">VS</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">Vishal Singh</h3>
                      <p className="text-gray-600 font-medium">Software Developer</p>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse animation-delay-2000"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse animation-delay-4000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white to-blue-50 rounded-3xl p-8 shadow-soft border border-blue-100/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Details</h3>
              <div className="grid gap-4 text-gray-700">
                <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-gray-600">Sahbajganj Sahjanwa, Gorakhpur 273209</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-600">vishalrw007@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-gray-600">+91 7355752539</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <span className="text-white text-lg">🌍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Languages</p>
                    <p className="text-sm text-gray-600">Hindi, English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Description and highlights */}
          <div className="space-y-10 animate-slideInRight">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500">
                  I am an enthusiastic, detail-focused software developer with a deep passion for web technologies 
                  and cybersecurity. My journey in technology has been driven by curiosity and a desire to create 
                  meaningful solutions that make a difference.
                </p>
                <p className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
                  With a strong foundation in both frontend and backend development, I specialize in building 
                  modern, scalable web applications. My interest in cybersecurity adds a unique perspective to 
                  my development approach, ensuring security best practices are integrated into every project.
                </p>
                <p className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500">
                  I'm always eager to learn new technologies and contribute to innovative projects that challenge 
                  me to grow both technically and professionally. My goal is to create impactful solutions that 
                  solve real-world problems while maintaining the highest standards of code quality and user experience.
                </p>
              </div>
            </div>

            {/* Enhanced Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${highlight.gradient} rounded-2xl text-white text-2xl shadow-lg`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">{highlight.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Hobbies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hobbies & Interests</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">When I'm not coding, you'll find me exploring these passions</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", name: "Reading", color: "from-blue-500 to-cyan-500" },
              { icon: "✈️", name: "Traveling", color: "from-purple-500 to-pink-500" },
              { icon: "⚽", name: "Sports", color: "from-green-500 to-emerald-500" },
              { icon: "🎵", name: "Music", color: "from-orange-500 to-red-500" },
              { icon: "🎮", name: "Video Games", color: "from-indigo-500 to-purple-500" },
              { icon: "🌍", name: "Learning Languages", color: "from-teal-500 to-cyan-500" },
              { icon: "💻", name: "Coding", color: "from-pink-500 to-rose-500" },
              { icon: "🎨", name: "Design", color: "from-yellow-500 to-orange-500" }
            ].map((hobby, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {hobby.icon}
                </div>
                <span className="font-semibold text-gray-800 text-lg">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 