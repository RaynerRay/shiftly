'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Menu, X, Cross } from 'lucide-react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto">
      <div className="hidden md:flex w-full bg-white py-2 px-4 justify-between items-center border-b">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          <span className="text-gray-600 text-sm">info@shiftly.uk</span>
        </div>
        <div className="flex gap-4">
          <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <Instagram className="w-4 h-4 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-blue-500 text-3xl mr-2"><Cross /></div>
                <span className="text-xl font-bold">SHIFTLY</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
              <Link href="/howitworks" className="text-gray-700 hover:text-blue-500">How It Works</Link>
              <Link href="/join/professionals" className="text-gray-700 hover:text-blue-500">Join</Link>
              {/* <Link href="/doctors" className="text-gray-700 hover:text-blue-500"></Link> */}
              <Link href="/articles" className="text-gray-700 hover:text-blue-500">Articles</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            </div>

            {/* Right side - Phone and Appointment */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Hotline:</div>
                  <div className="text-sm font-medium">+(44) 864 434 57</div>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Login +
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
              <Link href="/howitworks" className="text-gray-700 hover:text-blue-500">How It Works</Link>
              <Link href="/join/professionals" className="text-gray-700 hover:text-blue-500">Join</Link>
              {/* <Link href="/doctors" className="text-gray-700 hover:text-blue-500"></Link> */}
              <Link href="/articles" className="text-gray-700 hover:text-blue-500">Articles</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                <div className="px-3 py-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-500 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Hotline:</div>
                      <div className="text-sm font-medium">+(44) 864 434 57</div>
                    </div>
                  </div>
                  <Link href={"/login"} className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Login +
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;