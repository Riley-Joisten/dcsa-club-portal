'use client'; // Required for interactivity (useState) in Next.js App Router

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// 1. Logo Component
const Logo = () => (
  <Link href="/" className="flex items-center">
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-600">
      Campus<span className="text-gray-900">Connect</span>
    </span>
  </Link>
);

// 2. Search Bar Component
const SearchBar = () => (
  <div className="hidden md:block w-1/3"> 
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input 
        type="search" 
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" 
        placeholder="Search..." 
      />
    </div>
  </div>
);




const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. THE REF: Create a reference to track the dropdown element
  const menuRef = useRef(null);

  // 2. THE DATA: Define your links here so HTML stays clean
  const menuLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", href: "/signout" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  // 3. THE EFFECT: Handle clicks outside
  useEffect(() => {
    // This function runs every time the user clicks ANYWHERE
    const handleClickOutside = (event) => {
      // Logic: If menu is open AND the click was NOT inside our ref div
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up listener (Run when component is destroyed)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array = Attach this listener only once!

  return (
    // Attach the ref to the OUTERMOST container of the dropdown
    <div className="relative ml-3" ref={menuRef}>
      
      <button 
        onClick={toggleDropdown}
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
      >
        <span className="sr-only">Open user menu</span>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
           {/* (Icon SVG here) */}
           <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3 border-b">
            <p className="text-sm text-gray-900">Bonnie Green</p>
            <p className="text-sm font-medium text-gray-500 truncate">name@flowbite.com</p>
          </div>
          
          <ul className="py-1">
            {/* 4. THE MAP: Loop through data to create links */}
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  // Optional: Close menu when a link is clicked
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
// 4. Main Navbar Component
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
        <Logo />
        <SearchBar />
        <div className="flex items-center">
            {/* You can add notification icons here in the future */}
            <UserDropdown />
        </div>
      </div>
    </nav>
  );
}