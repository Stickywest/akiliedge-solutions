import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjust the import path if necessary
import { auth } from './firebaseConfig'; // Adjust the import path if necessary
import { signOut } from 'firebase/auth';
import { FaUserCircle, FaRegComment, FaCoins } from 'react-icons/fa'; // Import the icons
import logoImage from "../assets/logo1.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await signOut(auth);
    alert("You have signed out.");
    setIsOpen(false); // Close the menu on logout
  };

  const closeMenu = () => setIsOpen(false); // Function to close the menu

  return (
    <nav className="w-full bg-black bg-opacity-70 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src={logoImage} alt="logo" className="h-10 mr-2" />;
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
            Home
          </Link>
          <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
            About
          </Link>
          <Link to="/services" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
            Our Services
          </Link>
          <Link to="/career" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
            Career
          </Link>
          <a href="#contact" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
            Contact
          </a>

          {/* Conditional Rendering for Login/Logout */}
          {user ? (
            <div className="flex items-center">
              <FaUserCircle className="text-green-500 text-2xl cursor-pointer mr-4" onClick={handleLogout} />
              <span className="text-green-500">Logout</span>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
                Login
              </Link>
              <Link to="/signup" className="text-white px-3 py-2 rounded hover:bg-yellow-500">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray bg-opacity-80 p-4">
          <div className="flex flex-col items-start">
            <Link to="/" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
              About
            </Link>
            <Link to="/services" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
              Our Services
            </Link>
            <Link to="/career" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
              Career
            </Link>
            <a href="#contact" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
              Contact
            </a>

            {/* Conditional Rendering for Mobile Login/Logout */}
            {user ? (
              <div className="flex items-center justify-between w-full">
                <FaUserCircle className="text-green-500 text-2xl cursor-pointer mr-4" onClick={handleLogout} />
                <FaRegComment className="text-yellow-500 text-2xl cursor-pointer mr-4" onClick={closeMenu} />
                <FaCoins className="text-yellow-500 text-2xl cursor-pointer" onClick={closeMenu} />
                <span className="text-green-500">Logout</span>
              </div>
            ) : (
              <>
                <Link to="/login" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/signup" className="block text-white px-3 py-2 rounded hover:bg-yellow-500 font-boogalo" onClick={closeMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
