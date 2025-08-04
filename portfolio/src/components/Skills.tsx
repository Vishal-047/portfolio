'use client';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "C", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "C++", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "JAVA", level: 70, color: "from-red-500 to-pink-500" }
      ]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Bootstrap", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "Figma", level: 75, color: "from-pink-500 to-rose-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
        { name: "Flask", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "Firebase", level: 75, color: "from-orange-500 to-yellow-500" },
        { name: "Django", level: 70, color: "from-green-600 to-green-800" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "SQLite", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
        { name: "Mongoose", level: 70, color: "from-green-600 to-green-800" }
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: "🛡️",
      gradient: "from-red-500 to-pink-500",
      skills: [
        { name: "Wireshark", level: 75, color: "from-blue-500 to-cyan-500" },
        { name: "Burp Suite", level: 70, color: "from-orange-500 to-red-500" },
        { name: "Nmap", level: 80, color: "from-green-500 to-emerald-500" },
        { name: "Metasploit", level: 65, color: "from-red-600 to-red-800" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🔧",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "GitHub", level: 90, color: "from-gray-800 to-gray-900" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "VirtualBox", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-200/20 mb-6">
            <span className="text-purple-600 text-sm font-medium">🛠️ Technical Expertise</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            A comprehensive set of technical skills acquired through education, projects, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white text-3xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Competencies</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Beyond technical skills, I bring these valuable competencies to every project</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "RESTful APIs", color: "from-blue-500 to-cyan-500" },
              { skill: "Responsive Design", color: "from-purple-500 to-pink-500" },
              { skill: "UI/UX Design", color: "from-green-500 to-emerald-500" },
              { skill: "Agile Methodology", color: "from-orange-500 to-red-500" },
              { skill: "Problem Solving", color: "from-indigo-500 to-purple-500" },
              { skill: "Team Collaboration", color: "from-teal-500 to-cyan-500" },
              { skill: "Version Control", color: "from-gray-500 to-gray-700" },
              { skill: "Testing & Debugging", color: "from-red-500 to-pink-500" },
              { skill: "Performance Optimization", color: "from-yellow-500 to-orange-500" },
              { skill: "Security Best Practices", color: "from-green-600 to-green-800" },
              { skill: "Cloud Deployment", color: "from-blue-600 to-blue-800" },
              { skill: "API Integration", color: "from-purple-600 to-purple-800" }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 text-center group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.skill.charAt(0)}
                </div>
                <span className="font-semibold text-gray-800 text-lg">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Summary */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-white to-purple-50 rounded-3xl p-12 shadow-soft border border-purple-100/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills Overview</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  6+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Programming Languages</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Development Tools</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Database Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 