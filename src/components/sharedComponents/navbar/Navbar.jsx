import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/tommarum-logo_TR-BLACK.png'

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="md:flex md:justify-between open-sans-body bg-[#E2D4A6] px-6 lg:px-12 py-4">
      <div className="flex justify-between items-center">
        <div className="w-50 h-12"  >
        <img src={logo} alt="tommarum"/>
        </div>
        <button
          className="text-black text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden text-lg text-black">
           <Link
      to="/"
      className={`text-center w-full ${location.pathname === '/' ? 'border-b-2 border-black pb-1' : 'pb-1'}`}
      onClick={() => setMenuOpen(false)}
      >
      Hem
      </Link>
     <Link
      to="/about"
      className={`text-center w-full ${location.pathname === '/about' ? 'border-b-2 border-black pb-1' : 'pb-1'}`}
      onClick={() => setMenuOpen(false)}
      >
      Om oss
     </Link>
     <Link
      to="/projects"
      className={`text-center w-full ${location.pathname === '/projects' ? 'border-b-2 border-black pb-1' : 'pb-1'}`}
      onClick={() => setMenuOpen(false)}
     >
      Projekt
     </Link>
      <a
      href="https://bokning.tommarum.se"
      className="pb-1 text-center w-full"
      >
      Anmälan
      </a>
        </div>
      )}
      <div className="hidden md:flex space-x-10 mt-4 text-lg text-black">
        <Link
          to="/"
          className={location.pathname === '/' ? 'border-b-2 border-black pb-1' : 'pb-1'}
        >
          Hem
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'border-b-2 border-black pb-1' : 'pb-1'}
        >
          Om oss
        </Link>
        <Link
          to="/projects"
          className={location.pathname === '/projects' ? 'border-b-2 border-black pb-1' : 'pb-1'}
        >
          Projekt
        </Link>
        <a
         href="https://bokning.tommarum.se"
         className="pb-1"
        >
          Anmälan
        </a>
      </div>
    </nav>
  );
}

export default Navbar;