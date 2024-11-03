import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

// eslint-disable-next-line react/prop-types
const TopNavbar = ({ isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`top-0 left-0 w-full p-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'fixed bg-white text-gray-800 shadow-md navbar-slide-down' : 'hidden'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div >
          <img className="w-16 h-14 ml-10"   src="https://i.ibb.co.com/n8mynVc/logo.jpg" alt="" />
        <p className='text-sm italic pt-1 font-bold'>100% ExportOriented</p>
        </div>
        
        
        {/* Menu Icon and Navigation Links */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        <ul className={`md:flex space-x-6 hidden ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
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

export default TopNavbar;
