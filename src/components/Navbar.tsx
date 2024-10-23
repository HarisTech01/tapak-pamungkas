import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Menu } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useCartStore } from '../stores/cartStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Tapak Pamungkas
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          <div className={`lg:flex items-center gap-6 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-red-600 p-4 flex flex-col lg:flex-row' : 'hidden lg:flex'}`}>
            <Link to="/" className="hover:text-red-200">Beranda</Link>
            <Link to="/products" className="hover:text-red-200">Daftar Produk</Link>
            <Link to="/testimonials" className="hover:text-red-200">Testimoni</Link>
            <Link to="/reseller" className="hover:text-red-200">Join Reseller</Link>
            
            {user ? (
              <>
                <Link to="/profile" className="hover:text-red-200">
                  <User className="inline-block mr-1" size={20} />
                  {user.name}
                </Link>
                <Link to="/cart" className="hover:text-red-200 relative">
                  <ShoppingCart className="inline-block" size={20} />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {items.length}
                    </span>
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-200 flex items-center"
                >
                  <LogOut className="inline-block mr-1" size={20} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-red-600 px-4 py-2 rounded-md hover:bg-red-100"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;