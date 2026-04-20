import SoundWave from "../assets/SoundWave.png";
import tictactoe from "../assets/tictactoe.png";
import landingPage from "../assets/landingPage.png";

const projects = [
  {
    title: "SoundWave Music Player",
    image: SoundWave,
    desc: "Music player UI with playback controls and clean layout.",
    tech: "HTML • CSS • JS",
    github: "https://github.com/Riya-17srm/SoundWave",
  },
  {
    title: "Tic-Tac-Toe Game",
    image: tictactoe,
    desc: "Responsive game with win logic and smooth UX.",
    tech: "HTML • CSS • JS",
    github: "https://github.com/Riya-17srm/TicTacToe_new",
  },
  {
    title: "Tailwind Landing Page",
    image: landingPage,
    desc: "Modern responsive landing page using Tailwind.",
    tech: "Tailwind • HTML",
    github: "https://github.com/Riya-17srm/Tailwind-Landing-page",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">

      <h2 className="text-3xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition"
          >
           
            <img
              src={p.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>

              <p className="text-gray-400 text-sm mt-2">
                {p.desc}
              </p>

              <p className="text-blue-400 text-xs mt-2">
                {p.tech}
              </p>

              <a
                href={p.github}
                target="_blank"
                className="inline-block mt-4 text-blue-500 text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;