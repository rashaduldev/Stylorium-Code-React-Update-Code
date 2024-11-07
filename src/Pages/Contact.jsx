import ContactForm from "../components/HomepageComponent/ContactForm";
import Nav from "../components/Navber/Nav";


const ContactPage = () => {
  return (
   <div>
    <Nav isVisible={true}/>
         <div className="w-full mt-28">
      {/* Header Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/zSVCqkm/images-1.jpg')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="relative text-white text-5xl font-bold z-10">CONTACT</h1>
        <nav className="absolute bottom-14 text-white z-10">
          <span>HOME/ CONTACT US</span>
        </nav>
      </div>

      {/* Contact Info Section */}
      <section className="text-center py-12 mt-5">
        <h2 className="text-gray-500 text-md font-bold">REACHING OUR OFFICE</h2>
        <h3 className="text-2xl font-bold mb-8">FIND OUR LOCATION</h3>
        
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-gray-800 text-white w-80 p-6 rounded-lg flex flex-col items-center">
            <span className="text-yellow-500 text-3xl mb-4">&#x1F4CD;</span>
            <h4 className="font-bold text-lg">VISIT OUR OFFICE</h4>
            <p>9051 Constra Incorporate, USA</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gray-800 text-white w-80 p-6 rounded-lg flex flex-col items-center">
            <span className="text-yellow-500 text-3xl mb-4">&#x2709;</span>
            <h4 className="font-bold text-lg">EMAIL US</h4>
            <p>office@Constra.com</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gray-800 text-white w-80 p-6 rounded-lg flex flex-col items-center">
            <span className="text-yellow-500 text-3xl mb-4">&#x1F4DE;</span>
            <h4 className="font-bold text-lg">CALL US</h4>
            <p>(+1) 847-291-4353</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
         </div>
         <ContactForm/>
   </div>
  );
};

export default ContactPage;
