import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faEnvelope,
  faPhone,
  faGlobe,
  faAnglesUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-base-content relative">
      <button className="w-16 h-16 bg-white rounded-full border-2 border-black absolute left-[45%] bottom-[95%] md:left-[50%] md:bottom-[92%]">
        <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
      </button>
      <div className="container mx-auto footer p-10">
        <nav className="">
          <h6 className="footer-title">Stylorium Sourcing Ltd.</h6>
          <a className="link link-hover">Corporate Headquarters</a>
          <div className="w-4/6">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="ml-2">
              AM Tower (Level-6), Plot# 25, Sonargaon Janapath Road Sector# 12,
              Uttara, Dhaka - 1230
            </span>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              Email:<a className="link link-hover"> info@stylorium.net</a>{" "}
            </p>
          </div>
          <div className="flex gap-2 w-4/6">
            <FontAwesomeIcon icon={faPhone} />
            <span className="">Phone: +880 1730595698</span>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faGlobe} />
            <p>
              Website:<a className="link link-hover">stylorium.net</a>{" "}
            </p>
          </div>
        </nav>
        {/* mIddle */}
        <nav>
          <h6 className="footer-title">India Office</h6>
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
        <nav>
          <h6 className="footer-title">Quick View</h6>

          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">Product Gallery</a>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">R&D</a>
          </div>
        </nav>
      </div>
      <div className="flex justify-center gap-5 border-base-300 px-10 py-4">
        <FontAwesomeIcon icon={faHouseChimney} />

        <FontAwesomeIcon icon={faHouseChimney} />

        <FontAwesomeIcon icon={faHouseChimney} />
        <FontAwesomeIcon icon={faHouseChimney} />
        <FontAwesomeIcon icon={faHouseChimney} />
        <FontAwesomeIcon icon={faHouseChimney} />
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
