import { CiLocationOn } from "react-icons/ci";
import ContactForm from "../components/HomepageComponent/ContactForm";
import Nav from "../components/Navber/Nav";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


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
        <h3 className="text-3xl font-bold mb-8 text-gray-600">FIND OUR LOCATION</h3>
        
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
            <span className="text-white text-3xl mb-4"><CiLocationOn /></span>
            <h4 className="font-bold text-lg">VISIT OUR OFFICE</h4>
            <p>AM Tower (Level-6), Plot# 25, Sonargaon Janapath Road Sector# 12, Uttara, Dhaka - 1230</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
            <span className="text-white text-3xl mb-4"><MdOutlineMailOutline /></span>
            <h4 className="font-bold text-lg">EMAIL US</h4>
            <p>info@stylorium.net</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
            <span className="text-white text-3xl mb-4"><FiPhone /></span>
            <h4 className="font-bold text-lg">CALL US</h4>
            <p>+880 1730595698</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d912.1101776160232!2d90.38082282923236!3d23.873986225389995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUyJzI2LjQiTiA5MMKwMjInNTIuOSJF!5e0!3m2!1sbn!2sbd!4v1680938649082!5m2!1sbn!2sbd"
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
