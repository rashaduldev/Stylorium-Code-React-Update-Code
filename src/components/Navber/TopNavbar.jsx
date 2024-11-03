import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <ul className="md:flex space-x-6 hidden md:block">
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
          <li>
            <NavLink
              to="/our-company"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR COMPANY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourproducts"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR Products
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
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              ABOUT US
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
              to="/home"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-company"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR COMPANY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourproducts"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              OUR PRODUCT
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
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'text-gray-800 hover:text-blue-600'
              }
            >
              ABOUT US
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

export default TopNavbar;
