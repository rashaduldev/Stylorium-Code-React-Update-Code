import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Nav from '../components/Navber/Nav';

const faqdata = [
    {
        id: 1,
        question: "What is the return policy?",
        answer: "Our return policy allows for returns within 30 days of purchase with a valid receipt. Items must be in original condition."
    },
    {
        id: 2,
        question: "How do I track my order?",
        answer: "You can track your order by logging into your account and viewing your order history. A tracking number will be provided once your order is shipped."
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination."
    },
    {
        id: 4,
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email at support@example.com or by calling our toll-free number at 1-800-123-4567."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
       <div>
        <Nav isVisible={true}/>
         <div className="flex flex-col lg:flex-row justify-center lg:my-64 my-8 mt-[120px] lg:gap-72 gap-12 lg:mx-48 px-4 lg:px-0 py-6">
                <div className='text-center lg:text-left'>
                    <h1 className="text-4xl font-bold">
                        Frequently Asked <br /> Questions
                    </h1>
                    <p className='mt-6 text-xl'>
                        Explore our eLearning platform FAQ section for quick <br className='hidden lg:inline' />
                        solutions to common queries, ensuring a seamless <br className='hidden lg:inline' />
                        learning journey.
                    </p>
                </div>
                <div className="w-full lg:w-[700px]">
                    {faqdata.map((item, index) => (
                        <div key={item.id} className="bg-base-200 my-2 rounded-lg">
                            <div
                                className="flex items-center justify-between p-4 cursor-pointer"
                                onClick={() => toggleCollapse(index)}
                            >
                                <span className="text-lg lg:text-xl font-medium flex gap-2">
                                    <h4 className='font-bold'>Q:{item.id}</h4>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <button className='flex items-center btn bg-[#251818] hover:bg-[#201313] text-[#ffffff]'>
                                        <p>Answer</p>
                                        <FaChevronUp className="text-xl" />
                                    </button>
                                ) : (
                                    <button className='flex items-center btn bg-[#1d1010] hover:bg-[#1a1010] text-[#ffffff]'>
                                        <p>Answer</p>
                                        <FaChevronDown className="text-xl" />
                                    </button>
                                )}
                            </div>
                            {openIndex === index && (
                                <div className="p-4">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
     </div>
       </div>
    );
};

export default Faq;
