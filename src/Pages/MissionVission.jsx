import Nav from "../components/Navber/Nav";


// Dummy images (replace these URLs with actual images if you have them)
const images = [
  "https://hooversagrovet.com/wp-content/uploads/2020/09/mission.jpg",
  "https://www.khmconsultancy.com/images/vision.jpg",
  "https://img.freepik.com/free-vector/gradient-core-values-infographics_23-2149066996.jpg",
  "https://via.placeholder.com/150",
];

const MissionVisionValues = () => {
  return (
   <div>
    <Nav isVisible={true}/>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 container mx-auto mt-28">
      {/* Mission */}
      <div className="bg-orange-300 text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR MISSION</h2>
        <p className="mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-4 text-md">
          Senectus urna vestibulum tincidunt turpis venenatis. Auctor tristique justo cras cubilia curabitur.
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[0]} alt="Mission" className="w-full h-auto" />
      </div>

      {/* Vision */}
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[1]} alt="Vision" className="w-full h-auto" />
      </div>
      <div className="bg-orange-600 text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR VISION</h2>
        <p className="mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-4 text-md">
          Senectus urna vestibulum tincidunt turpis venenatis. Auctor tristique justo cras cubilia curabitur.
        </p>
      </div>

      {/* Values */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR VALUES</h2>
        <p className="mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-4 text-md">
          Senectus urna vestibulum tincidunt turpis venenatis. Auctor tristique justo cras cubilia curabitur.
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[2]} alt="Values" className="w-full h-auto" />
      </div>
    </div>
   </div>
  );
};

export default MissionVisionValues;
