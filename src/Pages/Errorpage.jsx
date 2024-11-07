import { RiArrowGoBackLine } from "react-icons/ri";

const Errorpage = () => {
    return (
        <div>
            <div className="lg:pt-32 text-center">
                <div>
                    <h1 className="text-[64px] font-[800] leading-[87.42px] mb-[10px]">Oops!</h1>
                    <p className="text-[16px] font-[600] leading-[24px]">The page you are looking for may have been moved, deleted, or Possibly never existed</p>
                </div>
               <img className="w-[975px] h-[415px] my-10 mx-auto" src="https://i.ibb.co.com/2cdYSJv/404-Illustration.png" alt="" />
               <div className="flex items-center gap-4 my-20 justify-center">
               <p><RiArrowGoBackLine /></p>
               <a href="/">Go Home</a>
               </div>
            </div>
        </div>
    );
};

export default Errorpage;