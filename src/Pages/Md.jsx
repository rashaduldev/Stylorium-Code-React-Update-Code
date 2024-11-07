import Nav from "../components/Navber/Nav";

const Md = () => {
  return (
  <div>
    <Nav isVisible={true}/>
          <div className="border border-gray-300 rounded-lg shadow-lg container mx-auto my-8 bg-white mt-36">
      {/* Top Border */}
      <div className="h-4 bg-red-600 relative">
        <div className="absolute inset-x-0 top-0 h-4 bg-red-800" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}></div>
      </div>
      
      {/* Content */}
      <div className="p-8 px-10">
        {/* Company Logo and Name */}
        <div className="flex items-center mb-6">
          <img src="https://i.ibb.co/n8mynVc/logo.jpg" alt="Company Logo" className="h-16 mr-4" /> {/* Replace with actual logo path */}
          <h1 className="text-lg md:text-4xl font-bold text-gray-800">Stylorium Sourcing Ltd.</h1>
        </div>
        
          <div className="flex flex-row ">
          <div className="w-[80%] pr-10">
                {/* Header */}
                <h2 className="text-lg md:text-4xl font-bold mb-4">Message from the Office of the President <br /> & Managing Director</h2>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 md:text-2xl tracking-normal leading-10">
                Dear Patrons, Shareholders and Valued Customers:
                </p>
                <p className="text-gray-700 mb-6 md:text-2xl tracking-normal leading-10">
                AB Bank, countrys first private sector commercial bank is celebrating its 39 <sup>th</sup> Anniversary. As the CEO of this great institution I on behalf of my Senior Management Team and all members of our AB Family would like to thank you for being with us for the last 39 years of our journey.
                </p>
             </div>
        
        {/* Right Image */}
        <div className="w-[20%]">
          <img src="https://i.ibb.co.com/7t8C70R/MD.jpg" alt="CEO" className="md:w-64 md:h-64 w-20 h-20 object-cover rounded-lg shadow-md" /> {/* Replace with actual image path */}
        </div>
          </div>
          <div>
            <div className="md:text-2xl space-x-9 tracking-normal leading-10">COVID is spreading in an alarming rate and Bangladesh like other countries of the world has been deeply affected. We are continuously monitoring the situation and will make changes as per government directives from time to time to ensure continuity of service and accordingly, we will update you through sms, email and via our website. However, I urge all of you to maintain personal hygiene and social distancing to keep you and your family safe. 
                <br /> <br />
            I take this opportunity to thank the initiative of the sponsors of this Bank who had the courage to set up the first private sector Bank of the country and then to build it to be the one of the leading banks of the country. We the employees of this Bank are grateful to them for being able to be part of this success story. <br /> <br />
            My special and grateful thanks to all the members of AB Family who are coming to their work place amid this pandemic to serve our customers. I also admire the courage and dedication of all the health workers, law enforcement agencies, the members of electronic and print media for their professionalism in serving their respective field at this critical time.
         <br /> <br />
           Stay Safe and Stay Well. May the Almighty be always with us.
            </div>
          </div>
        
        {/* Signature Section */}
        <div className="mt-8">
          <img src="https://i.ibb.co.com/XpHHQsC/signature.png" alt="logo" />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-4 bg-red-600 relative">
        <div className="absolute inset-x-0 top-0 h-4 bg-red-800" style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }}></div>
      </div>
      
      {/* Footer */}
      <div className="text-center py-4 bg-gray-100">
        <p className="text-gray-700">www.stylorium.net</p>
      </div>
    </div>
  </div>
  );
};

export default Md;
