

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ label, percentage, color }) => {
    return (
        <div className="items-center mb-4">
            <span className="w-32 text-gray-700 text-xl font-semibold pl-2">{label}</span>
            <div className="flex items-center w-full bg-gray-200 rounded-full h-4 mx-2 mt-2">
                <div
                    style={{ width: `${percentage}%` }}
                    className={`h-4 rounded-full ${color}`}
                ></div>
                <span className="text-gray-700 text-sm font-semibold">{percentage}%</span>
            </div>
            
        </div>
    );
};

const Dashboard = () => {
    const progressData = [
        { label: 'KINT', percentage: 30, color: 'bg-red-500' },
        { label: 'FLAT KINT', percentage: 15, color: 'bg-blue-500' },
        { label: 'WOVEN TOP', percentage: 18, color: 'bg-green-500' },
        { label: 'WOVEN BOTTOM', percentage: 12, color: 'bg-yellow-500' },
        { label: 'JACKET/OUTWEAR', percentage: 15, color: 'bg-gray-500' },
        { label: 'HOME TEXTILE', percentage: 4, color: 'bg-indigo-500' },
        { label: 'WORK-WEAR', percentage: 6, color: 'bg-teal-500' },
    ];

    return (
        <div className="flex flex-col md:flex-row bg-gray-100 space-y-6 md:space-y-0 md:space-x-0">
            {/* 1st Div: Information Section */}
            <div className="flex-1 space-y-6">
              <div className='grid grid-cols-2'>
                      {/* card-1 */}
                <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src="https://i.ibb.co.com/MpHW6fM/content-Image.jpg"
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* card-2 */}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[18px]'>Your trusted partner</h1>
                    </div>
                    {/*  3*/}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[18px]'>We do Textile, Footwear, Handicraft, Home textile, Home furniture Household, Gloves, Crockery, Coconut shell, kitchen item, Bag & Backpack, High tech sports, Toy etc.</h1>
                    </div>
                    {/* 4 */}
                    <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src="https://i.ibb.co.com/vDNXM4F/content-Image1.jpg"
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* 5 */}
                    <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src="https://i.ibb.co.com/TrBSD9X/content-Image2.jpg"
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* 6 */}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[18px]'>The phrase sustainable industries is related to the development of industrial processes in a sustainable way. The phrase refers to greening of energy intensive industries such as the textiles, steel, cement, and paper industries.</h1>
                    </div>
              </div>
            </div>

            {/* 2nd Div: Progress Bar Section */}
          <div className='h-full flex-1 w-full'>
          <div className=" py-7 space-y-[37.4px] px-10 h-full bg-[#7E92BC] text-2xl">
                {progressData.map((data, index) => (
                    <ProgressBar
                        key={index}
                        label={data.label}
                        percentage={data.percentage}
                        color={data.color}
                    />
                ))}
            </div>
          </div>
        </div>
    );
};

export default Dashboard;
