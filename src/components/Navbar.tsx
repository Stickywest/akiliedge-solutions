import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import logoImage from "../assets/logo1.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = async () => {
    await signOut(auth);
    alert("You have signed out.");
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-black bg-opacity-70 p-4 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => { navigate('/'); closeAllMenus(); }}>
          <img src={logoImage} alt="logo" className="h-10 mr-2" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-4">
            <Link to="/" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Home
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              About
            </Link>
            <Link to="/services" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Our Services
            </Link>
            <Link to="/products" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Products
            </Link>
            
            <div className="relative">
              <button className="text-white px-3 py-2 rounded hover:bg-yellow-500 text-left">
                Contact
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg py-1 hidden hover:block z-10">
                <a href="tel:+254797934558" className="block hover:bg-gray-100 px-4 py-2 text-left">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="text-left">
                      <p className="font-bold">+254 797 934558</p>
                      <p className="text-sm">Head of Marketing</p>
                    </div>
                  </div>
                </a>
                {/* Other contact items... */}
              </div>
            </div>

            <Link to="/blog" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Blog
            </Link>

            <Link to="/career" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Career
            </Link>
          </div>

          {/* Profile Dropdown */}
          <div className="relative ml-4">
            <button 
              onClick={toggleProfileDropdown}
              className="flex items-center focus:outline-none"
            >
              <FaUserCircle className={`text-2xl ${user ? 'text-green-500' : 'text-white hover:text-yellow-500'}`} />
            </button>
            
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-left">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100 flex items-center"
                  >
                    <FaSignInAlt className="mr-2 text-yellow-500" />
                    Logout
                  </button>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-100 flex items-center text-left"
                    >
                      <FaSignInAlt className="mr-2 text-yellow-500" />
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-100 flex items-center text-left"
                    >
                      <FaUserPlus className="mr-2 text-yellow-500" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Left Aligned */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 p-4 absolute w-full left-0 z-40 text-left">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Home
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              About
            </Link>
            <Link to="/services" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Our Services
            </Link>
            <Link to="/products" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Products
            </Link>
            <Link to="/blog" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Blog
            </Link>
            <Link to="/career" className="text-white px-3 py-2 rounded hover:bg-yellow-500" onClick={closeAllMenus}>
              Career
            </Link>
            
            {/* Mobile Contact Dropdown */}
            <div className="relative">
              <button 
                className="text-white px-3 py-2 rounded hover:bg-yellow-500 w-full text-left"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                Contact
              </button>
              {isProfileDropdownOpen && (
                <div className="mt-2 bg-gray-800 rounded-md py-1 text-left">
                  <a href="tel:+254797934558" className="block px-4 py-2 text-white hover:bg-yellow-500 rounded">
                    Head of Marketing: +254 797 934558
                  </a>
                  {/* Other contact items... */}
                </div>
              )}
            </div>

            {/* Mobile Profile Dropdown - Left Aligned */}
            <div className="pt-4 border-t border-gray-700">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-white rounded hover:bg-yellow-500 flex items-center"
                >
                  <FaUserCircle className="mr-2 text-green-500" />
                  Logout
                </button>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    onClick={closeAllMenus}
                    className="block px-3 py-2 text-white rounded hover:bg-yellow-500 flex items-center"
                  >
                    <FaSignInAlt className="mr-2" />
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    onClick={closeAllMenus}
                    className="block px-3 py-2 text-white rounded hover:bg-yellow-500 flex items-center"
                  >
                    <FaUserPlus className="mr-2" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;