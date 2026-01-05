import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'PLUTUS - MOHAMMEDIA',
      period: 'May 2025 - August 2025',
      description: 'Internship',
      highlights: [
        'Developed internal real estate management platform with dynamic front-end using Blade and Bootstrap',
        'Optimized MySQL database performance through UML design and efficient query implementation',
        'Managed project using Agile methodology (Scrum) with GitHub Planning and JIRA',
      ],
    },
    {
      type: 'work',
      title: 'Quality Control Technician',
      organization: 'Central Danone - ELJADIDA',
      period: 'March 2023 - September 2023',
      description: '',
      highlights: [
        'Conducted quality control for finished products ensuring compliance with standards',
        'Performed conformity verification and prepared detailed quality reports',
      ],
    },
  ];

  const education = [
    {
      degree: 'Web Development & Artificial Intelligence',
      institution: 'YouCode - UM6P',
      location: 'SAFI',
      period: '2024 - 2026',
      status: 'In Progress',
    },
    {
      degree: 'DEUG in Economics and Management',
      institution: 'FSEJS',
      location: 'El Jadida',
      period: '2021 - 2024',
      status: 'Completed',
    },
    {
      degree: 'License in Physics',
      institution: 'Faculty of Sciences',
      location: 'El Jadida',
      period: '2016 - 2019',
      status: 'Completed',
    },
  ];

  const interests = [
    {
      icon: Award,
      title: 'Football Referee',
      description: 'Referee Diploma (2019-2021)',
    },
    {
      icon: Award,
      title: 'Photography',
      description: 'Capturing moments and perspectives',
    },
    {
      icon: Award,
      title: 'Travel',
      description: 'Exploring new cultures and places',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-100">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-800 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-100">{exp.title}</h4>
                      {exp.description && (
                        <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {exp.description}
                        </span>
                      )}
                    </div>

                    <p className="text-cyan-400 mb-1">{exp.organization}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-100">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-100">{edu.degree}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        edu.status === 'In Progress'
                          ? 'text-green-400 bg-green-400/10'
                          : 'text-gray-400 bg-gray-700/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-blue-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location} • {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-100">Interests & Activities</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all text-center"
                >
                  <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">{interest.title}</h4>
                  <p className="text-gray-400 text-sm">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
          <h3 className="text-2xl font-semibold mb-4 text-gray-100">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-1">Arabic</h4>
              <p className="text-gray-400">Native</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-1">French</h4>
              <p className="text-gray-400">Fluent</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-1">English</h4>
              <p className="text-gray-400">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
