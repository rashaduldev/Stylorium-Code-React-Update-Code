import { useState } from 'react';
import Nav from '../components/Navber/Nav';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Faq = () => {
    const faqData = [
        { question: "Why shouldn't we trust atoms?", answer: "They make up everything" },
        { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
        { question: "What's the object-oriented way to become wealthy?", answer: "Inheritance." },
        { question: "How many tickles does it take to tickle an octopus?", answer: "Ten-tickles!" },
        { question: "What is: 1 + 1?", answer: "Depends on who you are asking." },
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
       <div>
        <Nav isVisible={true}/>
        <div className='mt-[111px]'>
        <div className='h-40 relative' style={{ backgroundImage: `url("https://i.ibb.co.com/4jK4Xx1/download.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='container mx-auto'>
            <h1 className='absolute top-0 text-4xl text-white uppercase'>Faq page</h1>
            </div>
        </div>
        <div className="faq-container">
        <h1 className='text-3xl font-bold'>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
            <div key={index} className={`faq ${activeIndex === index ? "active" : ""}`}>
            <h3 className="faq-title">{faq.question}</h3>
            <p className="faq-text">{faq.answer}</p>
            <button className="faq-toggle" onClick={() => toggleFAQ(index)}>
            <MdKeyboardArrowDown className="fas fa-chevron-down" />
            <MdKeyboardArrowUp className="fas fa-times" />
            </button>
            </div>
        ))}
        </div>
        
        </div>
       </div>
    );
};

export default Faq;
