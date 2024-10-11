import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 shadow-lg fixed top-0 w-full z-10 transition duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link to="/" className="text-3xl font-extrabold hover:text-yellow-300 text-white">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#skills" className="text-lg text-white hover:text-yellow-300 transition duration-300">Skills</a>
            <a href="#experience" className="text-lg text-white hover:text-yellow-300 transition duration-300">Experience</a>
            <a href="#about" className="text-lg text-white hover:text-yellow-300 transition duration-300">About</a>
            <a href="#projects" className="text-lg text-white hover:text-yellow-300 transition duration-300">Projects</a>
            <a href="#contact" className="text-lg text-white hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-100 focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden  w-full shadow-md mt-2 rounded-lg">
            {/* <div className="flex flex-col space-y-4 py-4 px-4">
              <Link to="#skills" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500 ">Skills</Link>
              <Link to="/exp" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Experience</Link>

              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">About</Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Projects</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Contact</Link>
            
            </div> */}
             <div className="flex flex-col space-y-4 py-4 px-4">
              <a href="#skills" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Skills</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Experience</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
