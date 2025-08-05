
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
          Hey, I'm <span className="font-medium">Praharsh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
          Building <strong className="text-gray-900">Innrspark</strong> - the career clarity I wish I had at 19.
        </p>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="italic">
            If you've ever felt lost about your path, this story might resonate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
