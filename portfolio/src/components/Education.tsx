'use client';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree",
      institution: "Lovely Professional University",
      status: "Pursuing",
      year: "2023 - Present",
      details: "CGPA: 7.54 (IV Sem)",
      location: "Punjab, India",
      icon: "🎓"
    },
    {
      degree: "12th Standard",
      institution: "Little Flower Sr. Sec. School",
      status: "Completed",
      year: "2022",
      details: "Percentage: 77%",
      location: "Gorakhpur, India",
      icon: "🏫"
    },
    {
      degree: "10th Standard",
      institution: "Little Flower Sr. Sec. School",
      status: "Completed",
      year: "2020",
      details: "Percentage: 85%",
      location: "Gorakhpur, India",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey has been focused on building a strong foundation in technology and computer science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg text-white text-2xl">
                  {education.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  education.status === 'Pursuing' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  {education.status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600">
                    {education.institution}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>📅</span>
                    <span>{education.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>📍</span>
                    <span>{education.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 font-medium">
                    {education.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Academic Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Current Focus</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Computer Science & Engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Web Development & Cybersecurity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Software Engineering Principles</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Academic Achievements</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Consistent academic performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active participation in technical events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Strong foundation in core subjects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 