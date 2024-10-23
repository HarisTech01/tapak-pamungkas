import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Keranjang Belanja Kosong</h2>
        <p className="text-gray-600 mb-8">
          Anda belum menambahkan produk ke keranjang.
        </p>
        <Link
          to="/products"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Keranjang Belanja</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-1 hover:text-red-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:text-red-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 h-fit space-y-4">
          <h2 className="text-xl font-bold">Ringkasan Belanja</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Barang</span>
              <span>{items.length} item</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Harga</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
            Lanjut ke Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;