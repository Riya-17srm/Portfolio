const skillsData = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "JWT Auth", "SQLAlchemy"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Core Concepts",
    items: ["DSA", "OOP", "OS", "DBMS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">

      <h2 className="text-3xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

   
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">

          {skillsData.slice(0, 3).map((category, i) => (
            <div key={i} className="mb-8">

              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-1.5 bg-[#0f172a]/80 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

     
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">

          {skillsData.slice(3, 6).map((category, i) => (
            <div key={i} className="mb-8">

              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-1.5 bg-[#0f172a]/80 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;