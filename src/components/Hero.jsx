import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-16 min-h-[80vh]">

   
      <div className="space-y-6">
        <p className="text-blue-400 font-medium">
          Full Stack Enthusiast
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm <br />
          <span className="text-blue-500">Riya Saxena</span>
        </h1>

        <p className="text-gray-400 max-w-md">
          I’m a focused and detail-oriented individual with a strong academic background in Computer Science.
I approach problems with a structured mindset and value clarity, consistency, and discipline in my work.
I’m driven to continuously improve, take ownership of what I build, and deliver results that are reliable and well thought out.
        </p>

     
        <div className="gap-4 ">
          <a href="#projects">
            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 m-6">
              Projects
            </button>
          </a>
           
          <a href="#skills">
            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
              Skills
            </button>
          </a>

        </div>
      </div>

    
      <div className="flex justify-center">
        <img
          src={profile}
          className="w-[320px] h-[320px] object-cover rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default Hero;