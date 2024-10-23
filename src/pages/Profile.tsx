import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { User, Package, Heart, MapPin } from 'lucide-react';

const Profile = () => {
  const { user } = useAuthStore();

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-red-100 p-4 rounded-full">
            <User className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Package className="w-8 h-8 text-red-600 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Pesanan Saya</h2>
          <p className="text-gray-600">Lihat status pesanan terbaru Anda</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <Heart className="w-8 h-8 text-red-600 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Wishlist</h2>
          <p className="text-gray-600">Produk yang Anda simpan</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <MapPin className="w-8 h-8 text-red-600 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Alamat</h2>
          <p className="text-gray-600">Kelola alamat pengiriman Anda</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;