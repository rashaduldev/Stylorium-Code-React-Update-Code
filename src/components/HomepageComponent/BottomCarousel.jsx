import { useRef, useState } from 'react';
import vedio1 from '../../assets/video/Why_choose_SSL.mp4';

const BottomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const cards = [
    { id: 1, label: 'Global Organic Textile Standard', imgSrc: 'https://i.ibb.co.com/NSM5Bks/Valus1.png' },
    { id: 2, label: 'WRAP', imgSrc: 'https://i.ibb.co.com/DwzgTPt/Valus2.png' },
    { id: 3, label: 'Responsible Forestry Certified', imgSrc: 'https://i.ibb.co.com/xgyYYy5/Valus3.png' },
    { id: 4, label: 'Global Recycled Standard', imgSrc: 'https://i.ibb.co.com/7WyRq37/Valus4.png' },
    { id: 5, label: 'Card 5', imgSrc: 'https://i.ibb.co.com/YDc5hYK/Valus5.jpg' },
    { id: 6, label: 'Card 6', imgSrc: 'https://i.ibb.co.com/NWFb05v/Valus6.jpg' },
    { id: 7, label: 'Card 7', imgSrc: 'https://i.ibb.co.com/6s2Qn39/Valus7.jpg' },
    { id: 8, label: 'Card 8', imgSrc: 'https://i.ibb.co.com/JcHDPFS/Valus8.jpg' },
  ];

  const cardsToShow = 4;
  const containerRef = useRef(null);

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


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const moveOffset = e.clientX - startX;
      setDragOffset(moveOffset);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <div className="relative h-[650px] my-8">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={vedio1}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-30"/>
      <div className="flex justify-center items-center h-full relative z-10">
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10">
          &lt;
        </button>
        <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
       >
          <div
            className="flex transition-transform duration-300 gap-5 cursor-pointer"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/4 p-2 flex-shrink-0"
              >
                <div className="w-full h-96 rounded-md border backdrop-blur-lg shadow-lg p-0 flex justify-center items-center">
                  <img src={card.imgSrc} alt={card.label} className="w-72 h-72 rounded-md border" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BottomCarousel;
