const Contact = () => {
  return (
   <div className="max-w-7xl mx-auto px-6 justify-between items-center bg-[#0f172a]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg    ">
    <section id="contact" className="py-24 text-center">

      <h2 className="text-3xl font-bold mb-4">
        Contact
      </h2>

      <p className="text-gray-400 mb-6">
        Let’s work together
      </p>

      <a href="mailto:01riyasaxena@gmail.com">
        <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600">
          01riyasaxena@gmail.com
        </button>
      </a>
         <br />
         <br />
       <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600">
          8279551542
        </button>

    </section>
    </div> 
  );
};

export default Contact;