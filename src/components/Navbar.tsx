import Link from 'next/link';
import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Music & Lyrics', href: '/music' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-[#111010] border-b border-[#3b3630] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#dc854b] text-2xl font-extrabold tracking-wider hover:text-[#f8a165] transition duration-150 whitespace-nowrap">
              Usini
            </Link>
          </div>

          <div className="flex items-center space-x-4 sm:ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 text-base font-medium text-[#d6d3cd] hover:text-[#9b9660] border-b-2 border-transparent hover:border-[#878048] transition duration-150 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}