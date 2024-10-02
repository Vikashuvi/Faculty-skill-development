import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="text-2xl font-bold text-indigo-600">KSRCE PORTAL</Link>
          </div>
          <div className="flex items-center">
            <Link to="/profile" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            <Link to="/signin" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
            <Link to="/signup" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
