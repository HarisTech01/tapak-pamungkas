import React from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 2199000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.8
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 2499000,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      rating: 4.7
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 1799000,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      rating: 4.5
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Daftar Produk</h1>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;