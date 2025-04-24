"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
      <Link href="/" className="text-xl font-bold text-green-700">
        FixHome
      </Link>
      <div className="space-x-4">
        <a href="#about" className="text-gray-600 hover:text-green-600">
          About
        </a>
        <a href="#services" className="text-gray-600 hover:text-green-600">
          Services
        </a>
        <a href="#contractors" className="text-gray-600 hover:text-green-600">
          Contractors
        </a>
        <a href="#contact" className="text-gray-600 hover:text-green-600">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
