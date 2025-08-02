import React from 'react';
import heroImage from '../../assets/app-pic.png'; // Correct relative path

function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 leading-tight">
            Organize your shopping —<br className="hidden sm:block" /> your way.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Sorta helps you track what to buy by category or store. Clean, simple, and built for how you actually shop.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 font-mono">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Shopping categories and checklist"
            className="w-full max-w-md mx-auto drop-shadow-md" />
        </div>
      </div>
    </section>
  );
}

export default Hero;