import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ShoppingCart, Heart, Minus, Plus, Truck, Shield, ArrowLeftRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCartStore } from '../stores/cartStore';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Mock data - replace with actual API call
const product = {
  id: 1,
  name: "Nike Air Max 270",
  price: 2199000,
  description: "Nike Air Max 270 menggabungkan gaya ikonik Air Max dengan inovasi modern untuk kenyamanan maksimal. Dengan unit Air 270 terbesar hingga saat ini, sepatu ini memberikan bantalan yang luar biasa untuk gaya hidup aktif Anda.",
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
  ],
  sizes: ["38", "39", "40", "41", "42", "43"],
  colors: ["Hitam", "Putih", "Merah"],
  stock: 15
};

const ProductDetail = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Pilih ukuran dan warna terlebih dahulu');
      return;
    }
    
    addItem({
      id: Number(id),
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    });
    
    toast.success('Produk ditambahkan ke keranjang');
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-96 rounded-lg"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper h-24"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full">
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover cursor-pointer rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-red-600 mt-2">
              Rp {product.price.toLocaleString()}
            </p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Ukuran</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-gray-300 hover:border-red-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-2">Warna</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedColor === color
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-gray-300 hover:border-red-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">Jumlah</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="p-2 rounded-md border border-gray-300 hover:border-red-600"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="p-2 rounded-md border border-gray-300 hover:border-red-600"
              >
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-500">
                Stok: {product.stock}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Tambah ke Keranjang
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:border-red-600">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-red-600 mb-2" />
              <span className="text-sm">Pengiriman Cepat</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-6 h-6 text-red-600 mb-2" />
              <span className="text-sm">Garansi Original</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <ArrowLeftRight className="w-6 h-6 text-red-600 mb-2" />
              <span className="text-sm">14 Hari Pengembalian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;