
import React from 'react';

const Journey = () => {
  const journeyItems = [
    {
      title: "The Foundation Years",
      description: "Seven years as a competitive swimmer taught me discipline, grit, and focus. When academic pressure forced me to quit, I learned something else: uncertainty can be a teacher too."
    },
    {
      title: "The Crisis (2023-2024)",
      description: "Career identity crisis hit hard. But instead of drowning, I started swimming in a different direction — teaching myself machine learning and AI from scratch, determined to build something that could change lives."
    },
    {
      title: "The Leap (Early 2025)",
      description: "Went full-time on Innrspark. No backup plan. Just obsession with building something that mattered more than it succeeded."
    },
    {
      title: "The Momentum (Mid 2025)",
      description: "Launched the waitlist at innrspark.com — 51 early believers joined in just a few weeks. Secured incubation support from my college's Tech Business Incubator. Started building the MVP, solo and scrappy, but with clear vision."
    },
    {
      title: "Right Now",
      description: "Building two things simultaneously: Innrspark MVP (the career clarity platform) and Shrija (a commercial marketing robot with voice and vision capabilities)."
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
          My Journey So Far
        </h2>
        
        <div className="space-y-12">
          {journeyItems.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-2 top-2"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-lg border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Current Obsessions</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              How AI can understand career fulfillment, not just career fit
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Why most people know what they don't want but struggle to articulate what they do want
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Building products that grow more valuable the longer you use them
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              The intersection of psychology, technology, and human potential
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
