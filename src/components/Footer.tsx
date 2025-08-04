'use client';

import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-white text-sm mb-4 md:mb-0">
            © 2025 Vishal Singh. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center text-white text-sm">
            Made with <FiHeart className="mx-1 text-red-400" /> by Vishal Singh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 