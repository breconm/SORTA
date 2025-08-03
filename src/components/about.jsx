import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
};

const About = () => {
  const features = [
    {
      title: 'Built Around Real Shopping',
      text: 'Organize items by category or by store, just like you plan your actual shopping trips.',
    },
    {
      title: 'Fast, Lightweight, Minimal',
      text: 'Designed to be clean and fast — so you spend less time planning and more time getting things done.',
    },
    {
      title: 'Cross-Platform Vision',
      text: 'Web today, mobile tomorrow. Sorta is being built for the way you actually shop — at home or on the go.',
    },
    {
      title: 'Designed with Intention',
      text: 'Every interaction, button, and layout is crafted to keep your list usable, clear, and flexible.',
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-sky-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-mono text-gray-800 mb-6">
          About Sorta
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Sorta is a modern, minimalist shopping list app designed for people who like to shop smart and stay organized.
          Whether you're shopping for groceries, clothes, tech, or gifts — Sorta makes it easy to keep track of what you need,
          where to get it, and how to stay on top of it all.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h3 className="text-xl font-semibold font-mono text-indigo-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm font-mono mb-4">
            Made with ♥ by real people solving real problems.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-mono font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
