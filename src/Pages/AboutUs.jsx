import Nav from "../components/Navber/Nav";

const AboutUs = () => {
  return (
    <div>
      {/* Fixed Navigation Bar */}
      <Nav isVisible={true} />

      {/* Main content with padding to avoid overlapping with the fixed Nav */}
      <div className="mt-20 md:py-12">
        {/* Header */}
        <div className="bg-slate-100">
            <div className="text-left mb-8  p-10 container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <p className="text-gray-600 mt-2">Home / About Us</p>
            </div>
        </div>

        {/* Image and About Section */}
        <div className="md:flex space-x-8 container mx-auto">
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/fCBJzsY/aboutus.png" // Replace with your image URL
              alt="About our shop"
              className="rounded-md w-full h-[80%]"
            />
          </div>
          <div className="mt-4 md:mt-0 flex-1">
            <h3 className="text-4xl font-semibold mt-5">About Our Shop</h3>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800">
              Download Company Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around justify-center container mx-auto md:my-2 my-10">
            <img className="w-32 h-32 rounded" src="https://i.ibb.co.com/ySgsp8r/aboutus2.png" alt="image1" />
            <img className="w-32 h-32 rounded" src="https://i.ibb.co.com/ySgsp8r/aboutus2.png" alt="image2" />
            <img className="w-32 h-32 rounded" src="https://i.ibb.co.com/ySgsp8r/aboutus2.png" alt="image3" />
            <img className="w-32 h-32 rounded" src="https://i.ibb.co.com/ySgsp8r/aboutus2.png" alt="image4" />
        </div>

        {/* Team Members Section */}
       {/* Team Members Section */}
        <div className="mt-12 container mx-auto">
          <h4 className="text-4xl font-bold text-center mt-24 text-gray-600 mb-16 uppercase">Team Members</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Jonathon Andrew', role: 'Founder', image: 'https://i.ibb.co.com/fFK7Dgg/images.jpg' },
              { name: 'Adipisci Volit', role: 'Developer', image: 'https://i.ibb.co.com/W6cdQh7/avatar-659652-640.webp' },
              { name: 'John Fexit', role: 'Shop Manager', image: 'https://i.ibb.co.com/5WVsbkw/download-1.png' },
              { name: 'Jane Doe', role: 'Shop Manager', image: 'https://i.ibb.co.com/Dt9BVvD/dummy-profile.jpg' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover"
                />
                <p className="mt-4 font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
