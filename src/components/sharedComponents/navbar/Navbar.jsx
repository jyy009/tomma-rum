import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineHomeWork } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);       

  return (
    <nav className="open-sans-body flex justify-between items-center px-6 lg:px-12 bg-[#E2D4A6]">
      <div className="text-black flex text-5xl lg:text-6xl">
        <MdOutlineHomeWork className="text-stone-800"/>
        <h1 className='text-2xl mt-3 ml-2'>TOMMA ROM</h1>
      </div>
      <button
        className="text-black text-3xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-transparent md:bg-transparent py-4 md:py-0 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-15 text-lg text-center text-black">
          <Link
            to="/"
            className={location.pathname === '/' ? 'border-b-3 border-black pb-1' : 'border-b-3 border-transparent pb-1'}

          >
            Hem
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'border-b-3 border-black pb-1' : 'border-b-3 border-transparent pb-1'}
          >
            Om oss
          </Link>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ?  'border-b-3 border-black pb-1' : 'border-b-3 border-transparent pb-1'}
          >
            Projekt
          </Link>
          
          <Link
            to="/booking"
            className={location.pathname === '/booking' ?  'border-b-3 border-black pb-1' : 'border-b-3 border-transparent pb-1'}
          >
            Anmälan
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
