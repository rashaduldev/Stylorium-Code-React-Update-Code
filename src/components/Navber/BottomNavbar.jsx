import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BottomNavbar = ({ isHidden }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full bg-transparent py-4 z-10 transition-opacity duration-300 ${
        isHidden ? 'navbar-slide-up' : 'relative'
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
        
        {/* Menu Icon and Navigation Links */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        <ul className={`md:flex space-x-6 hidden ${isMobileMenuOpen ? 'block' : 'hidden'} md:block text-gray-800`}>
          <li>HOME</li>
          <li>OUR COMPANY</li>
          <li>OUR SERVICE</li>
          <li>GALLERY</li>
          <li>QUALITY</li>
          <li>CAREER</li>
          <li>CONTACT</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start bg-white p-4 space-y-2 text-gray-800 md:hidden">
          <li>HOME</li>
          <li>OUR COMPANY</li>
          <li>OUR SERVICE</li>
          <li>GALLERY</li>
          <li>QUALITY</li>
          <li>CAREER</li>
          <li>CONTACT</li>
          <li>FAQ</li>
        </ul>
      )}
    </nav>
  );
};

export default BottomNavbar;
