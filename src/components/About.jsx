const About = () => {
  return (
    <section id="about" className="py-24">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Third-year Computer Science and Engineering student with a strong foundation in C, C++, and Java, and 6 years of hands-on programming experience in Java. 
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            Gained practical experience in web development, especially in creating responsive and interactive user interfaces. Currently focused on strengthening development skills by building projects using React.js, Tailwind CSS, and FastAPI, with an emphasis on applying concepts to real-world scenarios.
          </p>

        </div>

        
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#1e293b] p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-400">9.95</h3>
            <p className="text-gray-400 text-sm mt-2">CGPA</p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-400">6+</h3>
            <p className="text-gray-400 text-sm mt-2">Years Coding</p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-400">5+</h3>
            <p className="text-gray-400 text-sm mt-2">Projects</p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-400">2</h3>
            <p className="text-gray-400 text-sm mt-2">Research Papers</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;