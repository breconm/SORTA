import React from 'react';
import heroImage from 'https://github.com/breconm/SORTA/blob/Navbar/src/assets/add-item.png'

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono text-gray-800 leading-tight">
            Organize your shopping — your way - the best way.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Sorta helps you track what to buy by category or store. Clean, simple, and built for how you actually shop.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-mono hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-gray-400 text-gray-800 px-6 py-3 rounded-full font-mono hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Shopping list illustration"
            className="w-full max-w-md mx-auto drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;