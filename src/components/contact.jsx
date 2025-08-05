import React from 'react';

function Contact() {
  return (
    <section className="min-h-screen pt-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 font-mono mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-10">We’d love to hear from you! Whether it’s a feature request, bug report, or general question — drop us a message.</p>

        <form className="space-y-6 text-left bg-white p-6 rounded-2xl shadow-lg">
          <div>
            <label className="block text-sm text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none resize-none"
            ></textarea>
          </div>

          <button /* Link submit button to API */
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button> 
        </form>
      </div>
    </section>
  );
}

export default Contact;
