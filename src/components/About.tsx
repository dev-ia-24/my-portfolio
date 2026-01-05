import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a Full-Stack Developer and AI Engineer currently studying at YouCode - UM6P,
              I specialize in creating intelligent data-driven solutions that solve real-world problems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in NLP, Machine Learning, and cloud technologies, I transform
              complex data challenges into actionable insights through automated pipelines,
              intelligent systems, and scalable architectures.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My approach combines rigorous problem-solving with modern MLOps practices,
              ensuring solutions are not only innovative but also production-ready and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <Brain className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">AI & Machine Learning</h3>
              <p className="text-gray-400">
                Expertise in NLP, Deep Learning, and deploying intelligent systems with frameworks
                like TensorFlow, PyTorch, and Transformers.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Full-Stack Development</h3>
              <p className="text-gray-400">
                Building robust web applications with Laravel, FastAPI, React, and modern frontend technologies.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <Database className="text-teal-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Data Engineering</h3>
              <p className="text-gray-400">
                Designing scalable data pipelines with Apache Spark, Airflow, and cloud platforms like Azure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
