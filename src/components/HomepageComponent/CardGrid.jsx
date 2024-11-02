import React from 'react';

const CardGrid = () => {
  const cards = [
    { id: 1, name: 'Card 1', description: 'This is a brief description of Card 1, explaining its features and what makes it unique in the market.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Card 2', description: 'This is a brief description of Card 2, highlighting its benefits and why it stands out among similar products.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Card 3', description: 'This is a brief description of Card 3, covering its functionalities and the value it brings to customers and users alike.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Card 4', description: 'This is a brief description of Card 4, providing insights into its advantages and the reasons why clients prefer this option.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Card 5', description: 'This is a brief description of Card 5, detailing its unique aspects and how it serves the needs of various customers effectively.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Card 6', description: 'This is a brief description of Card 6, showcasing its prominent features and what sets it apart from other solutions available.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Card 7', description: 'This is a brief description of Card 7, focusing on its key functionalities and the benefits that it provides to its users.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Card 8', description: 'This is a brief description of Card 8, outlining its strengths and how it effectively meets customer demands in the market.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Card 9', description: 'This is a brief description of Card 9, explaining its significant features and how it brings value to its users and customers.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 10, name: 'Card 10', description: 'This is a brief description of Card 10, highlighting its unique selling points and the advantages it offers in the industry.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 11, name: 'Card 11', description: 'This is a brief description of Card 11, emphasizing its features and how it stands out among competitive products available.', imgSrc: 'https://via.placeholder.com/300' },
    { id: 12, name: 'Card 12', description: 'This is a brief description of Card 12, detailing its unique characteristics and how it effectively meets customer needs in the sector.', imgSrc: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={card.imgSrc} alt={card.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
            <div className="text-white p-4">
              <h3 className="font-bold text-xl">{card.name}</h3>
            </div>
          </div>
          <p className="mt-2 text-center text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
