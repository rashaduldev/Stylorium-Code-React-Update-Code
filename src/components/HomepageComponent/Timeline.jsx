import { FaRegCircle } from "react-icons/fa";

const items = [
  { color: 'bg-red-500', title: 'ETHICS', description: 'We are working constructively to influence proposed laws and regulations. Also follow corporate guideline and rules of foreign principle.' },
  { color: 'bg-yellow-500', title: 'QUALITY', description: 'Keep satisfy customers with superior quality & ensure our best product.' },
  { color: 'bg-blue-500', title: 'PRICE', description: 'Provide quality products with competitive price for achieve customers complete satisfaction.' },
  { color: 'bg-teal-500', title: 'SPEED', description: 'Our employees work daily to find newer & better ways to deliver quality goods on time with increasable production capacity.' },
  { color: 'bg-purple-500', title: 'DESIGN', description: 'Use efforts from innovation and excellence enable us to gain good accreditation in a highly competitive international market design.' },
  { color: 'bg-indigo-500', title: 'COMMUNICATION', description: 'To ensure work to our level of maturity we always keep flexible communication with buyers, factories & suppliers.' },
  { color: 'bg-green-500', title: 'CAPACITY', description: 'We inspect any purchase order capacity for work on its level of maturity & always keep better commitment for delivery.' },
];

// eslint-disable-next-line react/prop-types
const TimelineItem = ({ color, title, description, index }) => (
  <div className="flex items-start mb-8 relative">
    {/* Left Side 3 Dots */}
    <div className="absolute -left-9 top-4 hidden md:flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      ))}
    </div>

    {/* Center "SSL" Circle */}
    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 border border-blue-500 rounded-full text-xs font-semibold text-gray-600 shadow-md">
      SSL
    </div>

    {/* Item Content with Number, Title, and Description */}
    <div className="ml-4 md:ml-6">
      <div className="flex items-center">
        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white`}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="ml-2 text-sm md:text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-600 mt-2 ml-6 md:ml-8 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const Timeline = () => (
  <div className="px-4 md:px-0">
    <h2 className="relative text-center text-2xl md:text-4xl mt-5 font-semibold text-blue-600 mb-8 md:mb-12 pb-3">
      Our Concept
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 md:w-[13%] h-1 bg-blue-600"></span>
    </h2>

    <div className="max-w-2xl md:max-w-xl mx-auto py-8 md:py-16 relative md:ml-[45%]">

      {/* Left Vertical Line */}
      <div className="absolute left-6 md:left-10 top-16 md:top-[7%] bottom-0 border-l-2 border-gray-300 h-[76%]"></div>

      {/* Dot Markers on the Vertical Line */}
      {[6.8, 21.2, 31.4, 44, 56.2, 70.6, 82.9].map((top, i) => (
        <div
          key={i}
          className="absolute left-6 md:left-[33px] flex space-x-1"
          style={{ top: `${top}%` }}
        >
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"><FaRegCircle /></div>
        </div>
      ))}

    {/* Left "SSL" Circle with Gradient Border */}
      {/* <div
        className="absolute md:-left-[20%] md:top-[50%] top-0 left-[15%] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-gray-600 font-semibold text-xs md:text-sm"
        style={{
          border: '3px solid',
          borderRadius:'100%',
          borderImage: 'linear-gradient(to right, red, blue, yellow) 1',
        }}
      >
        SSL
      </div> */}
      <div className="absolute md:-left-[25%] md:top-[47%] top-0 left-[15%]">
      <div className="flex items-center space-x-4">
      {/* SSL Circle with Gradient Border */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full"
        style={{
          background: 'conic-gradient(blue, red, gray, yellow)', // Segmented gradient border
          padding: '4px',
        }}
      >
        {/* Inner circle for SSL text */}
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#4E5793] font-bold text-sm">
          SSL
        </div>
      </div>

      {/* Horizontal Dots */}
      <div className="flex space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className="w-2 h-2 bg-gray-400 rounded-full"
          ></span>
        ))}
      </div>
       </div>
      </div>


      {/* Timeline Items */}
      <div className="md:pl-[88px] pl-20 md:pr-16 mt-12 md:mt-0">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            color={item.color}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
