import Nav from "../components/Navber/Nav";

const AboutUs = () => {
  return (
    <div>
      {/* Fixed Navigation Bar */}
      <Nav isVisible={true} />

      {/* Main content with padding to avoid overlapping with the fixed Nav */}
      <div className="mt-20 md:py-12">
        {/* Header */}
        <div className="text-left mb-8 bg-slate-200 p-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="text-gray-600 mt-2">Home / About Us</p>
        </div>

        {/* Image and About Section */}
        <div className="md:flex md:space-x-8 container mx-auto">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="About our shop"
              className="rounded-md"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold">About Our Shop</h3>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Download Company Profile
            </button>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4  text-center">
        {Array(4).fill('').map((_, index) => (
            <div 
            key={index} 
            className="flex flex-col justify-center items-center border border-gray-300 rounded-full w-32 h-32 mx-auto p-4"
            >
            <div className="text-3xl font-bold">23</div>
            <div className="text-gray-500">Awards</div>
            </div>
        ))}
        </div>

        {/* Team Members Section */}
        <div className="mt-12">
          <h4 className="text-2xl font-semibold text-center mb-6">Team Members</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Jonathon Andrew', 'Adipisci Volit', 'John Fexit', 'John Fexit'].map((name, index) => (
              <div key={index} className="text-center">
                <img
                  src="https://via.placeholder.com/150" // Replace with the team member's image URL
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <p className="mt-4 font-medium">{name}</p>
                <p className="text-sm text-gray-500">
                  {index === 0 ? 'Founder' : index === 1 ? 'Developer' : 'Shop Manager'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
