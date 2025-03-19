
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/utils/productData';
import { Link } from 'react-router-dom';

interface ProductDisplayProps {
  product: Product;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-display relative animate-fade-in">
      <div className="product-image-container aspect-square bg-flipkart-cream">
        <Link to="/" className="back-button">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </Link>
        <img
          src={product.imageSrc}
          alt={product.name}
          className={`product-image zoom-on-load ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse-soft"></div>
        )}
      </div>
      <div className="product-info p-4">
        <h2 className="text-lg font-medium truncate">{product.name}</h2>
        <div className="flex items-center gap-3 mt-2">
          <span className="price-original text-sm">₹{product.originalPrice}</span>
          <span className="price-current text-xl">₹{product.currentPrice}</span>
          <span className="price-discount text-sm">{product.discount}% off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
