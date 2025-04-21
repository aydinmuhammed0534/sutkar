"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          SUTKAR
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
            Anasayfa
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
            Hakkında
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
            Ürünler
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
            İletişim
          </Link>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-gray-50">
            <Link 
              href="/" 
              className="w-full text-center py-3 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Anasayfa
            </Link>
            <Link 
              href="/about" 
              className="w-full text-center py-3 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Hakkında
            </Link>
            <Link 
              href="/products" 
              className="w-full text-center py-3 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Ürünler
            </Link>
            <Link 
              href="/contact" 
              className="w-full text-center py-3 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 