'use client'
// import { useState } from 'react';
import { Mail, Phone, HomeIcon } from 'lucide-react';
import Link from 'next/link';

const NavTop = () => {
  // const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  // const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  return (
    <nav className='bg-sky-500 '>
      <div className="flex h-12 py-2 px-4 items-center justify-between max-w-7xl mx-auto">
        
        <div className=" items-center space-x-4 px-4 hidden lg:block ">
          <a className="inline-flex items-center text-white hover:text-sky-500" href="mailto:info@markethub.co.zw">
            <Mail className="w-3 h-3" />
            <span className="hidden lg:block ml-2 text-sm font-bold">info@shiftly.uk</span>
          </a>
          <div className="inline-flex items-center text-white hover:text-sky-500" >
            <Phone className="w-3 h-3" />
            <span className=" ml-2 text-sm font-bold">+263-772-340-505</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Dropdown */}
          {/* <div className="relative ">
            <button
              className="flex items-center text-white text-sm font-bold hover:text-sky-500"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            >
              <span className="mr-2">dropdown</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {langDropdownOpen && (
              <div className="absolute z-50 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-sm font-bold text-black hover:text-sky-500">German</a>
                <a href="#" className="block px-4 py-2 text-sm font-bold text-black hover:text-sky-500">English</a>
                <a href="#" className="block px-4 py-2 text-sm font-bold text-black hover:text-sky-500">Polish</a>
              </div>
            )}
          </div> */}

          {/* Currency Dropdown */}
          <div className="flex items-center space-x-4 px-4">
          <Link className="inline-flex items-center text-white hover:text-sky-500" href="/services">
            <HomeIcon className="w-3 h-3" />
            <span className=" ml-2 text-sm font-bold">Home Services</span>
          </Link>
          <Link className="inline-flex items-center text-white hover:text-sky-500" href="/contact">
            <Phone className="w-3 h-3" />
            <span className=" ml-2 text-sm font-bold">Contact</span>
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
