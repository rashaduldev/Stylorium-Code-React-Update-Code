/* eslint-disable react/prop-types */
const TopNavbar = ({ isVisible }) => {
  return (
    <nav
      className={`top-0 left-0 w-full p-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'fixed bg-white text-gray-800 z-10 shadow-md navbar-slide-down' : 'hidden'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SSL</div>
        <ul className="flex space-x-6">
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
    </nav>
  );
};

export default TopNavbar;
