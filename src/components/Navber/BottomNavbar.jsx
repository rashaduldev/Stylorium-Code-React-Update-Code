// eslint-disable-next-line react/prop-types
const BottomNavbar = ({ isHidden }) => {
  return (
    <nav
      className={`w-full bg-transparent py-4 z-10 transition-opacity duration-300 ${
        isHidden ? 'navbar-slide-up' : 'relative'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SSL</div>
        <ul className="flex space-x-6 text-gray-800">
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

export default BottomNavbar;
