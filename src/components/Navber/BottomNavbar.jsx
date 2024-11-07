import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BottomNavbar = ({ isHidden }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOurCompanyOpen, setIsOurCompanyOpen] = useState(false); 

  const handleOurCompanyClick = () => {
    setIsOurCompanyOpen(!isOurCompanyOpen); // Toggle the dropdown on click
  };

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
        
        {/* Menu Icon */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Static Navigation Links */}
        <ul className="md:flex space-x-6 hidden md:block text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={handleOurCompanyClick} // Toggle on click
              className="text-gray-800 hover:text-blue-600"
            >
              OUR COMPANY
            </button>
            {/* Dropdown Menu */}
            {isOurCompanyOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full">
                
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/mission"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                    Mission
                  </NavLink>
                </li>
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/organogram"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                    Organogram
                  </NavLink>
                </li>
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/md"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                   OUR MD
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/our-service"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quality"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              QUALITY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              CAREER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start bg-white p-4 space-y-2 text-gray-800 md:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={handleOurCompanyClick} // Toggle on click
              className="text-gray-800 hover:text-blue-600"
            >
              OUR COMPANY
            </button>
            {/* Dropdown Menu */}
            {isOurCompanyOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full">
                
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/mission"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                    Mission
                  </NavLink>
                </li>
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/organogram"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                    Organogram
                  </NavLink>
                </li>
                <li className="border-b border-gray-800 w-full p-2">
                  <NavLink
                    to="/our-company/md"
                    className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600')}
                  >
                   OUR MD
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/our-service"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quality"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              QUALITY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              CAREER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default BottomNavbar;
