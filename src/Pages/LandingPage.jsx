import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (

    <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Header Section */}
     
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Hospital Campus Navigation System</h1>
        <p className="mt-4 text-lg text-gray-700">
          Navigate large hospital campuses effortlessly with real-time guidance, accessibility-friendly routes,
          and multi-floor support.
        </p>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Feature Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-500">🗺️ Multi-Floor Navigation</h2>
          <p className="mt-2 text-gray-600">
            Automatically switch floors when approaching elevators or staircases for seamless multi-level navigation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-500">📍 Real-Time Pathfinding</h2>
          <p className="mt-2 text-gray-600">
            Get live updates on routes, ensuring the fastest and most efficient paths within the campus.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500">♿ Accessibility</h2>
          <p className="mt-2 text-gray-600">
            Special routes optimized for wheelchair users and others with mobility challenges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-red-500">🚨 Emergency Alerts</h2>
          <p className="mt-2 text-gray-600">
            Stay informed with instant notifications for emergencies and traffic updates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500">🔍 Searchable Points of Interest</h2>
          <p className="mt-2 text-gray-600">
            Quickly find departments, labs, and emergency rooms with easy-to-use search functionality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-500">⚡ Real-Time Updates</h2>
          <p className="mt-2 text-gray-600">
            Receive live location tracking updates for efficient navigation.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </footer>
      
    </div>
    <Footer/>
    </div>

   
  );
};

export default LandingPage;
