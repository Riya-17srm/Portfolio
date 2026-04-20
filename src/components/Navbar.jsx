const Navbar = () => {
  return (
    <nav className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-[#0f172a]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg    ">

        <h1 className="text-sm font-semibold">
          Riya Saxena
        </h1>

        <div className="flex gap-8 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;