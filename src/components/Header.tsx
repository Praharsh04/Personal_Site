
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('innrspark')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Innrspark
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
