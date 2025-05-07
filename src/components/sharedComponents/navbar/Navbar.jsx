import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineHomeWork } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-5 open-sans-body flex justify-between items-center px-6 lg:px-12">
      <div className="text-orange-400 text-5xl lg:text-6xl">
        <MdOutlineHomeWork className="text-stone-800"/>
      </div>
      <button
        className="text-orange-400 text-3xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-transparent md:bg-transparent py-4 md:py-0 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-lg text-center">
          <Link
            to="/"
            className={location.pathname === '/' ? 'text-stone-800' : 'text-orange-400'}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'text-stone-800' : 'text-orange-400'}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'text-stone-800' : 'text-orange-400'}
          >
            About
          </Link>
          <Link
            to="/booking"
            className={location.pathname === '/booking' ? 'text-stone-800' : 'text-orange-400'}
          >
            Booking
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
