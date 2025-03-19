
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ProductDisplay from '@/components/ProductDisplay';
import AttributePill from '@/components/AttributePill';
import ProductCard from '@/components/ProductCard';
import { 
  mainProduct, 
  attributes, 
  generateSimilarProducts, 
  Product 
} from '@/utils/productData';
import { useToast } from '@/components/ui/use-toast';

const StyleMate: React.FC = () => {
  const { toast } = useToast();
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Generate initial similar products
  useEffect(() => {
    setSimilarProducts(generateSimilarProducts());
  }, []);

  const handleAttributeClick = (attributeId: string) => {
    setIsLoading(true);
    setSelectedAttribute(attributeId === selectedAttribute ? null : attributeId);
    
    // Simulate network request
    setTimeout(() => {
      const newProducts = generateSimilarProducts(
        attributeId === selectedAttribute ? null : attributeId,
        10
      );
      setSimilarProducts(newProducts);
      setIsLoading(false);
      
      // Show toast notification
      toast({
        title: "Recommendations updated",
        description: `Showing items based on ${
          attributes.find(attr => attr.id === attributeId)?.name || 'your preferences'
        }`,
        duration: 2000,
      });
    }, 800);
  };

  return (
    <div className="style-mate-app pb-8">
      <Header title="Style Mate" cartItemCount={3} />
      
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <ProductDisplay product={mainProduct} />
        
        {/* Attribute Pills */}
        <div className="attribute-pills-container overflow-auto px-4 py-4">
          <div className="flex gap-3 w-max">
            {attributes.map((attribute) => (
              <AttributePill
                key={attribute.id}
                attribute={attribute}
                isActive={selectedAttribute === attribute.id}
                onClick={handleAttributeClick}
              />
            ))}
          </div>
        </div>
        
        {/* Similar Products */}
        <div className={`similar-products-section transition-all duration-300 ${
          isLoading ? 'opacity-60' : 'opacity-100'
        }`}>
          <div className="similar-products-header">
            <h2 className="text-base font-medium">Similar Products</h2>
            <span className="text-xs text-gray-500">(200+)</span>
          </div>
          
          <div className="similar-products-grid">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleMate;
