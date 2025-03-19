
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-soft p-8 text-center animate-fade-in-up">
        <h1 className="text-3xl font-medium tracking-tight mb-4">Flipkart Style Mate</h1>
        <p className="text-gray-600 mb-8">
          Discover fashion recommendations based on your personal style preferences.
        </p>
        <Link
          to="/style-mate"
          className="inline-block bg-flipkart-blue text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Open Style Mate
        </Link>
      </div>
    </div>
  );
};

export default Index;
