
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Innovating the Future with Blockchain and AI
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Empowering businesses through secure, scalable, and intelligent
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition duration-200"
            >
              Discover Our Technology
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
