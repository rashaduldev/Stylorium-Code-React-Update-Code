import Particle from "./Perticle/Particle";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Form Wrapper */}
      <div className="relative p-8 rounded-lg shadow-lg max-w-lg w-full overflow-hidden z-10">
        {/* Particle Background for the Input Fields */}
        <div className="relative">
          {/* Apply particle effect only to the height of 100px */}
          <div className="absolute inset-0 -z-10 h-[100px]">
            {/* <Particle /> Particle effect is applied here */}
          </div>
        </div>

        {/* Form Content */}
        <form className="space-y-4 relative z-10">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
