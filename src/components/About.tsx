
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
          The Breakdown That Became a Breakthrough
        </h2>
        
        <div className="prose prose-xl mx-auto text-gray-600 leading-relaxed">
          <p>
            Growing up in Nagpur, I tried everything. Swimming pools at 5 AM. Basketball courts after school. 
            Archery ranges on weekends. Photography walks. Music lessons. Art classes.
          </p>
          
          <p>
            I was searching for something that would make me feel... <em>alive</em>.
          </p>
          
          <p>Nothing clicked.</p>
          
          <p>
            School felt like a factory line. Life felt like checking boxes. And the advice? Always the same: 
            "Do this, it pays well."
          </p>
          
          <p>
            No one asked what made my eyes light up. No one wondered who I could become — only what I could earn.
          </p>
          
          <p>
            By my second year of college, I broke down completely. Everyone around me seemed to know exactly 
            where they were going. I felt invisible, drifting in a world that suddenly expected me to have it all figured out.
          </p>
          
          <p className="text-gray-900 font-medium">
            But that breakdown? It planted a seed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
