import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const CommonNav = () => {
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);
  const [isFashionAccessoriesOpen, setIsFashionAccessoriesOpen] = useState(false);
  const [isHomeTextileOpen, setIsHomeTextileOpen] = useState(false);
  const [isNonTextileOpen, setIsNonTextileOpen] = useState(false);

  // Hover handlers for each dropdown
  const handleMouseEnter = (setState) => () => setState(true);
  const handleMouseLeave = (setState) => () => setState(false);

  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="relative group">
        <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
          OUR COMPANY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for OUR COMPANY */}
        <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full hidden group-hover:block">
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/mission"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Mission
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/organogram"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Organogram
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/md"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              OUR MD
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/ourproducts"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          OUR SERVICES
        </NavLink>
      </li>
      <li className="relative group">
        <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
          PRODUCT GALLERY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for PRODUCT GALLERY */}
        <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full hidden group-hover:block">
          {/* Women Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsWomenOpen)}
            onMouseLeave={handleMouseLeave(setIsWomenOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              WOMEN
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Women */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isWomenOpen ? "block" : "hidden"}`}
            >
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/jens'}>
                JENS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women/nightware'}>
                NIGHT WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Men Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsMenOpen)}
            onMouseLeave={handleMouseLeave(setIsMenOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              MEN
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Men */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isMenOpen ? "block" : "hidden"}`}
            >
                 <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/jackets'}>
                JACKETS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/nightware'}>
                NIGHT WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Kid's Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsKidsOpen)}
            onMouseLeave={handleMouseLeave(setIsKidsOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              Kid&lsquo;s
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Kid's */}
            <ul
              className={`absolute left-[135px] top-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isKidsOpen ? "block" : "hidden"}`}
            >
               <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/tops'}>
                    TOPS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/jackets'}>
                JACKETS
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/men/nightware'}>
                NIGHT WARE
                </NavLink>
              </li>
              <li className="hover:text-blue-600 border-b border-gray-300 p-2">
                <NavLink to={'/gallery/women'}>
                FOOT WARE
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Fashion Accessories Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsFashionAccessoriesOpen)}
            onMouseLeave={handleMouseLeave(setIsFashionAccessoriesOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex text-start items-center gap-1">
              Fashion Accessories
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Fashion Accessories */}
            <ul
              className={`absolute left-32 top-4 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isFashionAccessoriesOpen ? "block" : "hidden"}`}
            >
              <li>Accessory 1</li>
              <li>Accessory 2</li>
              <li>Accessory 3</li>
            </ul>
          </li>

          {/* Home Textile Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsHomeTextileOpen)}
            onMouseLeave={handleMouseLeave(setIsHomeTextileOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              Home Textile
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Home Textile */}
            <ul
              className={`absolute left-32 top-4 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isHomeTextileOpen ? "block" : "hidden"}`}
            >
              <li>Textile Item 1</li>
              <li>Textile Item 2</li>
              <li>Textile Item 3</li>
            </ul>
          </li>

          {/* Non Textile Button with Hover */}
          <li
            className="border-b border-gray-800 w-full p-2 relative group"
            onMouseEnter={handleMouseEnter(setIsNonTextileOpen)}
            onMouseLeave={handleMouseLeave(setIsNonTextileOpen)}
          >
            <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
              Non Textile
              <IoIosArrowDown className="text-lg" />
            </button>
            {/* Dropdown Menu for Non Textile */}
            <ul
              className={`absolute left-32 top-4 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 w-full ${isNonTextileOpen ? "block" : "hidden"}`}
            >
              <li>Non Textile Item 1</li>
              <li>Non Textile Item 2</li>
              <li>Non Textile Item 3</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
    <NavLink
    to="/contact"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    CONTACT
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/faq"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    FAQ
    </NavLink>
    </li>
    </>
  );
};

export default CommonNav;


