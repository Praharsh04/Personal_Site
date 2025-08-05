
import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
          Let's Connect
        </h2>
        
        <div className="prose prose-xl mx-auto text-gray-600 leading-relaxed mb-12">
          <p>
            I believe in thoughtful conversations over shallow networking.
          </p>
          <p>
            If you're building something meaningful, struggling with your own path, or just want to share ideas that matter — I'd genuinely love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
          <a 
            href="mailto:praharsh1004@gmail.com"
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-lg">praharsh1004@gmail.com</span>
          </a>
          
          <a 
            href="https://twitter.com/Praharsh52kar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <img 
              src="/lovable-uploads/b27e53f9-0788-441c-aa91-465cb12edaff.png" 
              alt="X (formerly Twitter)" 
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
            <span className="text-lg">@Praharsh52kar</span>
          </a>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">What I'd love to hear from you:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Your own career confusion story (seriously, they help me build better)</li>
                <li>• Ideas about career discovery that I might be missing</li>
                <li>• Feedback on anything I'm building</li>
                <li>• Random thoughts about life, work, and finding meaning</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">What I probably can't help with right now:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Immediate career advice (I'm still building the platform for that)</li>
                <li>• Investment opportunities (not fundraising yet)</li>
                <li>• Partnership requests that aren't aligned with helping people find career clarity</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-500 italic">
          P.S. — If even one person finds their spark through this work, it'll all be worth it.
        </p>
      </div>
    </section>
  );
};

export default Contact;
