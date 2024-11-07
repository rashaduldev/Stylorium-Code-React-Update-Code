import Nav from "../components/Navber/Nav";


const componentName = () => {
    return (
        <div>
            <Nav isVisible={true}/>
            <div className="mt-[110px]">
                <div className="bg-gray-300">
                <h1 className=" text-blue-500 text-3xl md:text-5xl font-bold container mx-auto px-2 py-10">Top Management of the company</h1>
                </div>
                <h1 className="text-center text-2xl md:text-4xl font-bold mt-10 italic tracking-wider">Company Organogram</h1>
                <div className="container mx-auto my-10 flex justify-center">
                    <img className="" src="https://i.ibb.co.com/mD1GqXn/Organogram.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default componentName;