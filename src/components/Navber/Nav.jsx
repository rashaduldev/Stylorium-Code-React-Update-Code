import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

// eslint-disable-next-line react/prop-types
const Nav = ({ isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`top-0 left-0 w-full p-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'fixed bg-white text-gray-800 shadow-md navbar-slide-down' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to={'/'}>
        <div>
          <img className="w-16 h-14 ml-10" src="https://i.ibb.co.com/n8mynVc/logo.jpg" alt="Logo" />
          <p className="text-sm italic pt-1 font-bold">100% Export Oriented</p>
        </div>
        </NavLink>

        {/* Menu Icon */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="md:flex space-x-6 hidden md:block">
          {['HOME', 'OUR COMPANY', 'OUR SERVICE', 'GALLERY', 'ABOUTUS', 'CAREER', 'CONTACT', 'FAQ'].map((link) => (
            <li key={link}>
              <NavLink
                to={link === 'HOME' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start bg-white p-4 space-y-2 text-gray-800 md:hidden">
          {['HOME', 'OUR COMPANY', 'OUR SERVICE', 'GALLERY', 'ABOUTUS', 'CAREER', 'CONTACT', 'FAQ'].map((link) => (
            <li key={link}>
              <NavLink
                to={link === 'HOME' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
