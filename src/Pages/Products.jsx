import React from 'react';
import Nav from '../components/Navber/Nav';

// Mock data for products (replace with your real data)
const products = [
  { id: 1, name: '3 Set Plastic Box', imageUrl: 'path/to/image1.png' },
  { id: 2, name: '5 Set Plastic Box', imageUrl: 'path/to/image2.png' },
  { id: 3, name: 'Adidas Cap', imageUrl: 'path/to/image3.png' },
  { id: 4, name: 'Aldi Mania', imageUrl: 'path/to/image4.png' },
  // Add more products as needed
];

// Component for the video section
const VideoSection = () => (
  <div className="flex justify-center items-center h-64 bg-gray-800">
    <div className="text-white text-6xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-5"
        />
      </svg>
    </div>
  </div>
);

// Component for individual product
const ProductCard = ({ name, imageUrl }) => (
  <div className="bg-white p-4 rounded shadow-md text-center">
    <img src={imageUrl} alt={name} className="w-full h-32 object-contain mb-2" />
    <p className="text-sm font-semibold">{name}</p>
  </div>
);

// Main Product Page component
const ProductPage = () => {
  return (
  <div>
     {/* Fixed Navigation Bar */}
     <Nav isVisible={true} />
        <div className="bg-gray-100 min-h-screen md:pt-20">
      {/* Video Section */}
      <VideoSection />

      {/* Section Title */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold italic">Summer Jacket</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductPage;
