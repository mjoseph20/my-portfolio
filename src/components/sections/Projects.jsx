import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
            What I've Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">IRDb</h3>
              <p className="text-gray-400 mb-4">
                Developed a web application to address the difficulty in
                familiarizing with various reality TV characters by providing a
                searchable database of shows, episodes, and personalities. The
                application allows users to create and manage teams of their
                favorite cast members, enhancing engagement with their favorite
                shows.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "Java",
                  "Spring Boot",
                  "React",
                  "Bootstrap",
                  "JUnit",
                  "Postman",
                  "AWS",
                  "Docker",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-purple-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/mjoseph20/capstone-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Frontend Source Code →{" "}
                </a>
              </div>
              <div>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/mjoseph20/capstone-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Backend Source Code →{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">ChatApp</h3>
              <p className="text-gray-400 mb-4">
                Built a Flutter-based chat application with Firebase
                authentication and real-time messaging
              </p>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Firebase", "Dart"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-purple-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/mjoseph20/Spring-2022-CSC4360-Mobile-App-Development/tree/main/CSC4360-Final-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code →{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Stock Price Predictor</h3>
              <p className="text-gray-400 mb-4">
                Developed an LSTM-based machine learning model to predict stock
                prices using Yahoo Finance data
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "numpy",
                  "pandas",
                  "matplotlib",
                  "sklearn",
                  "keras",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-purple-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/mjoseph20/Machine-Learning-Final-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
