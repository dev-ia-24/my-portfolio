import { ExternalLink, Github, Brain, Activity, Dribbble } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: 'AeroStream',
      description:
        'AI-powered sentiment classification system for airline customer reviews with automated NLP pipeline and real-time KPI tracking dashboard.',
      problem: 'Airlines needed to process thousands of customer reviews to identify sentiment trends and service issues quickly.',
      solution: 'Built an end-to-end NLP pipeline using Transformers and Sentence Embeddings for automated sentiment analysis.',
      impact: 'Enabled real-time customer sentiment monitoring with automated KPI dashboards for data-driven decision making.',
      technologies: [
        'Python',
        'Hugging Face',
        'Sentence Transformers',
        'Scikit-learn',
        'FastAPI',
        'ChromaDB',
        'PostgreSQL',
        'Streamlit',
        'Airflow',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Intelligent Medical Analysis System',
      description:
        'Deep Learning system for automated medical diagnosis: brain tumor detection using YOLOv8 and cancerous blood cell classification with PyTorch.',
      problem: 'Manual medical image analysis is time-consuming and requires expert radiologists, creating bottlenecks in diagnosis.',
      solution: 'Developed unified deep learning solution combining object detection (YOLOv8) and image classification (PyTorch) for automated analysis.',
      impact: 'Provided fast, accurate preliminary diagnosis to assist medical professionals in identifying critical conditions.',
      technologies: ['YOLOv8', 'PyTorch', 'OpenCV', 'Python', 'Transfer Learning'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Dribbble,
      title: 'FootConnect',
      description:
        'Comprehensive web platform centralizing football match management, statistics tracking, and sanctions with optimized communication for referees, coaches, and federation.',
      problem: 'Disconnected systems made it difficult to coordinate match schedules, track statistics, and manage sanctions across stakeholders.',
      solution: 'Built centralized platform with role-based access using Laravel, enabling seamless communication and data management.',
      impact: 'Streamlined football league operations with unified system for all stakeholders tracked via Jira and GitHub.',
      technologies: ['PHP', 'Laravel', 'Blade', 'PostgreSQL', 'Jira', 'GitHub'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">3 highlighted from 30+ completed projects</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-gray-950/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-gray-100">{project.title}</h3>
                      <p className="text-gray-300 text-lg mb-6">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <span className="text-red-400 font-semibold min-w-[100px]">Problem:</span>
                          <p className="text-gray-400">{project.problem}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-yellow-400 font-semibold min-w-[100px]">Solution:</span>
                          <p className="text-gray-400">{project.solution}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-green-400 font-semibold min-w-[100px]">Impact:</span>
                          <p className="text-gray-400">{project.impact}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-300 text-sm rounded-full border border-gray-700`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
