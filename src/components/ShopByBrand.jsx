import { useState } from 'react';

const brands = [
  { id: 1, name: 'Jacket', icon: "🧥 Jacket" },
  { id: 2, name: 'Shirt', icon: "👕 Shirt" },
  { id: 3, name: 'Tops', icon: "👚 Tops" },
  { id: 4, name: 'T_Shirt', icon: "👕 T-Shirt" },
  { id: 5, name: 'Salwar_Suit', icon: "👗 Salwar Suit" },
  { id: 6, name: 'Sports_wear', icon: "🏋️‍♂️ Sports Wear" },
  { id: 7, name: 'Swim_wear', icon: "🏊 Swim Wear" },
];

const products = {
  Jacket: [
    { id: 1, title: 'Winter Jacket', price: '৳ 1100', img: 'https://i.ibb.co/Gs8gJDz/jacket1.jpg', rating: 5, sales: 15 },
    { id: 2, title: 'Leather Jacket', price: '৳ 1300', img: 'https://i.ibb.co/h7S48rN/jacket2.jpg', rating: 4.5, sales: 12 },
    { id: 3, title: 'Denim Jacket', price: '৳ 800', img: 'https://i.ibb.co/HKzLCdW/jacket3.jpg', rating: 5, sales: 10 },
    { id: 4, title: 'Bomber Jacket', price: '৳ 700', img: 'https://i.ibb.co/FkrVWgx/jacket4.jpg', rating: 4, sales: 8 },
  ],
  Shirt: [
    { id: 1, title: 'Formal Shirt', price: '৳ 1000', img: 'https://i.ibb.co/h7S48rN/shirt1.jpg', rating: 4, sales: 10 },
    { id: 2, title: 'Casual Shirt', price: '৳ 900', img: 'https://i.ibb.co/h7S48rN/shirt2.jpg', rating: 4.2, sales: 8 },
    { id: 3, title: 'Printed Shirt', price: '৳ 850', img: 'https://i.ibb.co/h7S48rN/shirt3.jpg', rating: 4.3, sales: 9 },
    { id: 4, title: 'Plaid Shirt', price: '৳ 1100', img: 'https://i.ibb.co/h7S48rN/shirt4.jpg', rating: 4.7, sales: 11 },
  ],
  Tops: [
    { id: 1, title: 'Sleeveless Top', price: '৳ 900', img: 'https://i.ibb.co/FkrVWgx/top1.jpg', rating: 4, sales: 8 },
    { id: 2, title: 'Crop Top', price: '৳ 750', img: 'https://i.ibb.co/HKzLCdW/top2.jpg', rating: 4.3, sales: 7 },
    { id: 3, title: 'Floral Top', price: '৳ 850', img: 'https://i.ibb.co/Gs8gJDz/top3.jpg', rating: 4.5, sales: 9 },
    { id: 4, title: 'Blouse', price: '৳ 1050', img: 'https://i.ibb.co/h7S48rN/top4.jpg', rating: 4.8, sales: 10 },
  ],
  T_Shirt: [
    { id: 1, title: 'Graphic Tee', price: '৳ 650', img: 'https://i.ibb.co/h7S48rN/tshirt1.jpg', rating: 4.5, sales: 12 },
    { id: 2, title: 'V-Neck T-Shirt', price: '৳ 700', img: 'https://i.ibb.co/Gs8gJDz/tshirt2.jpg', rating: 4.4, sales: 11 },
    { id: 3, title: 'Oversized Tee', price: '৳ 800', img: 'https://i.ibb.co/HKzLCdW/tshirt3.jpg', rating: 4.7, sales: 14 },
    { id: 4, title: 'Polo T-Shirt', price: '৳ 850', img: 'https://i.ibb.co/FkrVWgx/tshirt4.jpg', rating: 4.9, sales: 13 },
  ],
  Salwar_Suit: [
    { id: 1, title: 'Designer Suit', price: '৳ 1500', img: 'https://i.ibb.co/Gs8gJDz/salwar1.jpg', rating: 4.8, sales: 6 },
    { id: 2, title: 'Cotton Suit', price: '৳ 1200', img: 'https://i.ibb.co/h7S48rN/salwar2.jpg', rating: 4.3, sales: 8 },
    { id: 3, title: 'Embroidered Suit', price: '৳ 1700', img: 'https://i.ibb.co/HKzLCdW/salwar3.jpg', rating: 4.6, sales: 5 },
    { id: 4, title: 'Anarkali Suit', price: '৳ 2000', img: 'https://i.ibb.co/FkrVWgx/salwar4.jpg', rating: 4.9, sales: 7 },
  ],
  Sports_wear: [
    { id: 1, title: 'Track Pants', price: '৳ 800', img: 'https://i.ibb.co/FkrVWgx/sports1.jpg', rating: 4.4, sales: 13 },
    { id: 2, title: 'Gym Vest', price: '৳ 650', img: 'https://i.ibb.co/Gs8gJDz/sports2.jpg', rating: 4.2, sales: 11 },
    { id: 3, title: 'Sports Bra', price: '৳ 900', img: 'https://i.ibb.co/HKzLCdW/sports3.jpg', rating: 4.7, sales: 10 },
    { id: 4, title: 'Joggers', price: '৳ 1000', img: 'https://i.ibb.co/h7S48rN/sports4.jpg', rating: 4.5, sales: 9 },
  ],
  Swim_wear: [
    { id: 1, title: 'One-piece Swimsuit', price: '৳ 700', img: 'https://i.ibb.co/HKzLCdW/swim1.jpg', rating: 4.5, sales: 10 },
    { id: 2, title: 'Bikini Set', price: '৳ 850', img: 'https://i.ibb.co/FkrVWgx/swim2.jpg', rating: 4.3, sales: 12 },
    { id: 3, title: 'Swimming Trunks', price: '৳ 650', img: 'https://i.ibb.co/Gs8gJDz/swim3.jpg', rating: 4.1, sales: 8 },
    { id: 4, title: 'Cover-Up', price: '৳ 900', img: 'https://i.ibb.co/h7S48rN/swim4.jpg', rating: 4.6, sales: 9 },
  ],
};

const ShopByBrands = () => {
  const [activeBrand, setActiveBrand] = useState('Jacket');

  return (
    <div className="p-4 mb-10">
      <h2 className="text-4xl font-semibold mb-4">Shop By Brands</h2>

      {/* Brand Scroller */}
      <div className="flex overflow-x-scroll space-x-4 mb-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`cursor-pointer p-2 ${activeBrand === brand.name ? 'border-b-4 border-orange-500' : ''}`}
            onClick={() => setActiveBrand(brand.name)}
          >
            {brand.icon}
          </div>
        ))}
      </div>

      {/* Products Display (show 4 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products[activeBrand]?.slice(0, 4).map((product) => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-md font-medium">{product.title}</h3>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">💼 {product.sales} Sales</span>
                <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-400 line-through">৳ {product.oldPrice || 'N/A'}</span>
                <span className="text-orange-500 font-bold">৳ {product.price}</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 py-2 bg-gray-200 text-sm rounded-md">Add to Cart</button>
                <button className="flex-1 py-2 bg-orange-500 text-white text-sm rounded-md">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
