
import React, { useState } from 'react';
import { Product } from '@/utils/productData';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="product-card animate-fade-in-up" 
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-flipkart-cream">
        <button 
          className="like-button"
          onClick={toggleLike}
          aria-label={isLiked ? "Unlike product" : "Like product"}
        >
          <Heart 
            size={20} 
            fill={isLiked ? "red" : "none"} 
            color={isLiked ? "red" : "black"}
            className="transition-all duration-300"
          />
        </button>
        <img
          src={product.imageSrc}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse-soft"></div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="price-current">₹{product.currentPrice}</span>
          <span className="price-original text-xs">₹{product.originalPrice}</span>
          <span className="price-discount text-xs">{product.discount}% off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
