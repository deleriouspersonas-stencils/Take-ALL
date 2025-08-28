
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-brand-secondary shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <ShieldCheckIcon className="h-8 w-8 text-brand-highlight" />
          <span className="text-2xl font-bold text-brand-text">Fortuna</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-brand-light hover:text-brand-text transition-colors">Dashboard</a>
          <a href="#" className="text-brand-light hover:text-brand-text transition-colors">Wallet</a>
          <a href="#" className="text-brand-light hover:text-brand-text transition-colors">Settings</a>
        </nav>
        <button className="bg-brand-highlight hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          My Account
        </button>
      </div>
    </header>
  );
};
