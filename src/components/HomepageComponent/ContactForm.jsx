


const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full overflow-hidden">
        
        {/* Particle Background Wrapper */}
        <div className="particle-wrapper absolute inset-0">
          {/* <Particle /> */}
        </div>
        
        {/* Form Content */}
        <h2 className="text-3xl font-bold text-center mb-6 z-10 relative">Get In Touch</h2>
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
