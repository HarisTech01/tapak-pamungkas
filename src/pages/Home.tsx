import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, ShoppingBag } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sepatu Running Pro",
      price: 999000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.8
    },
    // Add more featured products
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Tapak Pamungkas
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Temukan koleksi sepatu terbaik untuk gaya hidupmu
            </p>
            <Link
              to="/products"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Belanja Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Produk Unggulan</h2>
          <Link to="/products" className="text-red-600 hover:text-red-700">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
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
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ShoppingBag className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Produk Berkualitas</h3>
          <p className="text-gray-600">
            Koleksi sepatu terbaik dengan kualitas premium
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tren Terkini</h3>
          <p className="text-gray-600">
            Mengikuti perkembangan fashion dunia
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pelayanan Terbaik</h3>
          <p className="text-gray-600">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;