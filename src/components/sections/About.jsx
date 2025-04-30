import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programming = [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Go",
    "TypeScript",
    "C++",
  ];
  const databases = ["MySQL", "MongoDB", "PostgreSQL"];
  const frameworks = [
    "React",
    "Spring Boot",
    "RESTful APIs",
    "Bootstrap",
    "Tailwind CSS",
  ];
  const tools = ["Aigle (Scrum)", "CI/CD", "Docker", "Git", "Postman"];
  const cloud = ["AWS", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-red-300 bg-clip-text text-transparent text-center">
            The Journey So Far...
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <p className="text-gray-300 mb-6">
              I’m an end-to-end software engineer with experience building
              responsive, user-centered web applications using Java, Spring
              Boot, React, and MySQL. I focus on designing scalable backend
              systems and intuitive front-end experiences. My work often
              incorporates cloud services, along with CI/CD tools to support
              efficient development and deployment. Across my projects, I aim to
              deliver clean, maintainable code and thoughtful solutions that
              balance technical performance with user needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {programming.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-orange-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-yellow-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Tools & Methodologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-green-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {cloud.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-red-300 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className=" text-gray-300 space-y-2">
                <li>
                  <strong className="text-blue-400">
                    Bachelor of Science in Computer Science
                  </strong>{" "}
                  - Georgia State University (2014-2017, 2021-2022)
                </li>
                <li className="text-sm">
                  Relevant Coursework: Data Structures, Algorithms, Software
                  Engineering, Mobile App Development, Web Development, Machine
                  Learning
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work History</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Software Developer @ Dev10 (01/2025 - Present)
                  </h4>
                  <p>
                    I completed a 16-week intensive, full-time software
                    development program focused on Java, Spring Boot, SQL, REST
                    APIs, and Agile methodologies. During the program, I built a
                    full-stack capstone project that integrated database
                    management, API design, and front-end development.
                    Throughout the experience, I actively practiced Agile
                    workflows, including daily stand-ups, sprint planning, and
                    collaborative code reviews.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400">
                    Lead Coding Instructor @ Hope For Youth, INC. d.b.a. HYPE
                    (04/2024 - 12/2024)
                  </h4>
                  <p>
                    I empowered over 100 students aged 8–13 by leading coding
                    activities during the Atlanta Dream x Microsoft Power Her
                    Dreams Clinics, helping spark their interest in STEM.
                    Through hands-on instruction, I introduced programming
                    fundamentals, software development best practices, and
                    project-based learning to encourage curiosity and confidence
                    in tech.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400">
                    Coding Instructor @ CodeWizardsHQ (06/2023 - 04/2024)
                  </h4>
                  <p>
                    I taught K–12 students in both accelerated and 12-week
                    intensive coding programs, maintaining an 89% retention
                    rate. I prepared and delivered virtual lessons by setting
                    clear learning objectives, planning engaging activities, and
                    continuously assessing student understanding. I also
                    evaluated coding assignments with precision and provided
                    constructive feedback to support each student’s growth and
                    development in programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
