import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="bg-gray-500 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white-300 text-gray-800 rounded-full py-1 px-4 focus:outline-none focus:bg-white focus:text-gray-900"
          />
          <HiUserCircle className="ml-2 h-6 w-6 text-white-300" />
        </div>
      </div>
    </header>
  );
}
