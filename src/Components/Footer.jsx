import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail(''); // Clear input after subscription
    }
  };

  return (
    <footer className=" bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Newsletter Subscription */}
        <div className="mb-4 sm:mb-0">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Subscribe for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0 sm:mr-2"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-white"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="flex items-center text-green-400">
              <CheckCircle size={18} className="mr-2" /> Subscribed successfully!
            </p>
          )}
        </div>

        {/* Center: Copyright Info */}
        <p className="text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Navi . All rights reserved.</p>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
