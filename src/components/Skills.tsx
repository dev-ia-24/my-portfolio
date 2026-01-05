import { Code, Brain, Database, Cloud, Workflow, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Backend',
      color: 'from-blue-500 to-blue-600',
      skills: ['Python', 'PHP', 'JavaScript', 'Laravel', 'FastAPI'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-purple-500 to-pink-600',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Transfer Learning', 'Spark MLlib'],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-green-500 to-emerald-600',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake', 'ChromaDB'],
    },
    {
      icon: BarChart,
      title: 'NLP & Data Analytics',
      color: 'from-cyan-500 to-teal-600',
      skills: ['NLTK', 'SpaCy', 'Transformers', 'LLM Ops', 'RAG/Agents', 'Pandas', 'NumPy'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-600',
      skills: ['Azure', 'Docker', 'CI/CD', 'Git/GitHub'],
    },
    {
      icon: Workflow,
      title: 'Big Data & Orchestration',
      color: 'from-yellow-500 to-orange-600',
      skills: ['Apache Spark', 'Apache Airflow', 'Selenium', 'Streamlit', 'ReactJS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-100">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800/70 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
          <h3 className="text-2xl font-semibold mb-4 text-gray-100">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Agile/SCRUM',
              'Jira',
              'Trello',
              'Matplotlib',
              'Seaborn',
              'Tailwind CSS',
              'Bootstrap',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
