
import React from 'react';
import { Search, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ title, cartItemCount = 0 }) => {
  return (
    <header className="header-container animate-fade-in">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <X size={24} className="text-white" />
          </Link>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search size={24} className="text-white" />
          </button>
          <div className="relative">
            <ShoppingCart size={24} className="text-white" />
            {cartItemCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-flipkart-yellow text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
