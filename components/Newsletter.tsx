'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <div 
      className="rounded-lg p-8 my-12"
      style={{ 
        backgroundColor: 'rgb(180, 94, 207)',
        backgroundImage: 'linear-gradient(135deg, rgb(180, 94, 207) 0%, rgb(160, 74, 187) 100%)'
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-white bg-opacity-20">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        
        <p className="text-white text-opacity-90 mb-6">
          Stay up to date with the latest marketing, sales, and service tips and news.
        </p>

        {isSubscribed ? (
          <div className="max-w-md mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white font-medium">
              🎉 Thank you for subscribing! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-sm bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder:text-white placeholder:text-opacity-60"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-[rgb(180,94,207)] bg-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white text-opacity-75 text-sm mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
}