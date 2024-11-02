import { useState } from 'react';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, label: 'Global Organic Textile Standard', imgSrc: 'https://i.ibb.co.com/Pzw1MpP/Certificate13.jpg' },
    { id: 2, label: 'WRAP', imgSrc: 'https://i.ibb.co.com/n7m4zby/Certificate16.jpg' },
    { id: 3, label: 'Responsible Forestry Certified', imgSrc: 'https://i.ibb.co.com/BfB9V78/Certificate1.png' },
    { id: 4, label: 'Global Recycled Standard', imgSrc: 'https://i.ibb.co.com/DkbBm8d/Certificate2.png' },
    { id: 5, label: 'Card 5', imgSrc: 'https://i.ibb.co.com/cYxQtg2/Certificate3.png' },
    { id: 6, label: 'Card 6', imgSrc: 'https://i.ibb.co.com/9GnLYXc/Certificate6.png' },
    { id: 7, label: 'Card 7', imgSrc: 'https://i.ibb.co.com/kDWqdjw/Certificate7.png' },
    { id: 8, label: 'Card 8', imgSrc: 'https://i.ibb.co.com/4JJpq9z/Certificate9-01.png' },
  ];

  const cardsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < cards.length - (cardsToShow - 1) ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-cover bg-center h-[600px] my-8" style={{ backgroundImage: 'url(https://i.ibb.co.com/5MBkBKD/background-2.png)' }}>
      <div className="flex justify-center items-center h-full relative">
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full z-10">
          &lt;
        </button>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/4 p-4 flex-shrink-0"
              >
                <div className="w-full h-56 rounded-md border backdrop-blur-lg shadow-lg p-4 flex justify-center items-center">
                  <img src={card.imgSrc} alt={card.label} className=" w-44 h-44 rounded-full border" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full z-10">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;