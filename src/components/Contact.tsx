import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities in AI Engineering, Data Science, and Full-Stack Development.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:edderkaouioussama@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-950/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-gray-100 group-hover:text-cyan-400 transition-colors">
                      edderkaouioussama@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+212654174604"
                  className="flex items-center gap-4 p-4 bg-gray-950/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-100 group-hover:text-cyan-400 transition-colors">
                      +212 654 174 604
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-950/50 rounded-lg border border-gray-800">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-100">Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/oussama-edderkaoui-15a150332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/OUSSAMAEDDERKAOUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-950/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Let's discuss an opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
            <p className="text-xl text-gray-300 mb-2">
              Open to opportunities in <span className="text-cyan-400 font-semibold">AI Engineering</span>,
              <span className="text-blue-400 font-semibold"> Data Science</span>, and
              <span className="text-teal-400 font-semibold"> Full-Stack Development</span>
            </p>
            <p className="text-gray-400">Let's build something innovative together!</p>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; 2026 Oussama Edderkaoui. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
