
import React from 'react';

const Innrspark = () => {
  return (
    <section id="innrspark" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
          What I'm Building
        </h2>
        
        <div className="prose prose-xl mx-auto text-gray-600 leading-relaxed">
          <p className="text-2xl font-light text-gray-900 mb-8 text-center">
            <strong>Innrspark</strong> - the platform I desperately needed when I had no map, no clarity, and no one to guide me.
          </p>
          
          <p>
            Here's the thing: India has less than 10,000 certified career counselors for over 300 million students 
            and professionals. It's like having a wildfire with barely any firefighters.
          </p>
          
          <p>
            Most career platforms give you generic tests and robotic suggestions. They tell you <em>what</em> you might be, 
            but never <em>how</em> to get there.
          </p>
          
          <p>
            <strong>Innrspark is different.</strong> It combines deep psychometric intelligence with real human mentorship. 
            We don't just analyze your personality, skills, and interests - we map you to actual career paths, connect you 
            with mentors who've walked that journey, and create learning roadmaps that are both future-proof and financially viable.
          </p>
          
          <p className="text-gray-900 font-medium">
            Because knowing yourself is just the beginning. Building the life you want? That's where the real work starts.
          </p>
        </div>

        <div className="mt-16 bg-gray-900 text-white p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl font-light mb-6">Why Now Matters</h3>
          <div className="prose prose-lg prose-invert">
            <p>
              AI is reshaping everything at breakneck speed. Jobs are disappearing overnight. New roles are emerging 
              faster than we can name them. Most people don't even see what's coming.
            </p>
            <p>
              Innrspark isn't just keeping up - we're scanning the horizon. From AI-driven fields to unconventional paths, 
              we're building the bridge between who you are today and who you're meant to become tomorrow.
            </p>
            <p className="text-white font-medium">
              This isn't a side project. This is a movement toward a world where people don't end up in wrong careers 
              just because no one showed them the right one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innrspark;
