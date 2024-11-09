import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faEnvelope,
  faPhone,
  faGlobe,
  faAnglesUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FaDribbbleSquare, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLastFmCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white relative mt-10">
      <button className="w-16 h-16 bg-white text-[#1F2937] rounded-full border-2 border-black absolute left-[45%] bottom-[95%] md:left-[50%] md:bottom-[92%]">
        <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
      </button>
      <div className="container mx-auto footer p-10">
        <nav className="">
        <div className="text-lg mb-5">
          <img className="w-16 h-14 ml-10"   src="https://i.ibb.co.com/n8mynVc/logo.jpg" alt="" />
        <p className='italic pt-1 font-bold text-lg'>100% ExportOriented</p>
        </div>
          <h6 className="font-bold text-white text-2xl">Stylorium Sourcing Ltd.</h6>
          <a className="link link-hover text-lg">Corporate Headquarters</a>
          <div className="w-4/6 text-lg">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="ml-2">
              AM Tower (Level-6), Plot# 25, Sonargaon Janapath Road Sector# 12,
              Uttara, Dhaka - 1230
            </span>
          </div>
          <div className="flex gap-2 text-lg">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              Email:<a className="link link-hover"> info@stylorium.net</a>{" "}
            </p>
          </div>
          <div className="flex gap-2 w-4/6 text-lg">
            <FontAwesomeIcon icon={faPhone} />
            <span className="">Phone: +880 1730595698</span>
          </div>
          <div className="flex gap-2 text-lg">
            <FontAwesomeIcon icon={faGlobe} />
            <p>
              Website:<a className="link link-hover">stylorium.net</a>{" "}
            </p>
          </div>
        </nav>
        {/* mIddle */}
        <nav className="text-lg">
          {/* <h6 className="footer-title"></h6> */}
          <a className="link link-hover ml-2 md:mt-16">India Office</a>
          <div className="flex gap-2 w-4/6">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="">
              Flat. N5 Crest View Jewel Richmond, Rajagiri Valley Kakkanad,
              Kochi, Kerala, India
            </span>
          </div>
          <a className="link link-hover">Pakistan Office</a>
          <div className="flex gap-2 w-4/6">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="">
              Flat. N5 Crest View Jewel Richmond, Rajagiri Valley Kakkanad,
              Kochi, Kerala, India
            </span>
          </div>
        </nav>
        <nav className="text-lg">
          <h6 className="footer-title md:mt-16">Quick View</h6>

          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={'/gallery'}>
            <a className="link link-hover">Product Gallery</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={'/faq'}>
            <a className="link link-hover">FAQ</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">R&D</a>
          </div>
        </nav>
      </div>
      <div className="flex justify-center gap-5 border-base-300 px-10 py-4 text-3xl">
      <FaFacebook />
      <AiFillTwitterCircle />
      <FaLinkedin />
      <FaDribbbleSquare />
      <TiSocialLastFmCircular />
      <FaYoutube />
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - Stylorium Sourcing Ltd.
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
