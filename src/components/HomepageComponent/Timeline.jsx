
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
    <div className="absolute -left-10 top-3 flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      ))}
    </div>

    {/* Center "SSL" Circle */}
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 border border-blue-500 rounded-full text-xs font-semibold text-gray-600 shadow-md">
      SSL
    </div>

    {/* Item Content with Number, Title, and Description */}
    <div className="ml-6">
      <div className="flex items-center">
        <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white`}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="ml-2 text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-600 mt-2 ml-8">{description}</p>
    </div>
  </div>
);

const Timeline = () => (
 <div>
     <h2 className="relative text-center text-4xl mt-5 font-semibold text-blue-600 mb-12 pb-3">
  Our Concept
  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[13%] h-1 bg-blue-600"></span>
</h2>

         <div className="max-w-xl mx-auto py-16 relative left-[14%]">

    {/* Left Vertical Line */}
    <div className="absolute left-10 top-20 bottom-0 border-l-2 border-gray-300 h-[76%]"></div>
    <div className="absolute left-[30px] top-[6%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[20%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[30%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[41.5%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[55.4%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[69.3%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="absolute left-[30px] top-[81.5%] flex space-x-1">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="w-5 h-5 bg-gray-400 rounded-full"></div>
      ))}
    </div>

    {/* Left "SSL" Circle with Gradient Border */}
    <div className="absolute -left-[20%] top-[50%]  w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm shadow-md"
      style={{ border: '3px solid', borderRadius:'100%', borderImage: 'linear-gradient(to right, red, blue, yellow) 1' }}>
      SSL
       {/* Left 4 Dots */}
    <div className="absolute left-20 flex space-x-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    </div>

   

    <div className="pl-32 pr-16">
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
