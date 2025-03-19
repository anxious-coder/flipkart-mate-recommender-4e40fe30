
export interface Product {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  imageSrc: string;
  attributes: string[];
}

export interface Attribute {
  id: string;
  name: string;
  icon: string;
}

export const mainProduct: Product = {
  id: "product-001",
  name: "Meesan Women Printed Kurta",
  category: "Women's Clothing",
  originalPrice: 1098,
  currentPrice: 429,
  discount: 61,
  imageSrc: "/lovable-uploads/827d6dff-4d3f-45a7-9469-6469211122c0.png",
  attributes: [
    "sleeveless-tank", 
    "white-summer", 
    "red-tunic", 
    "summer", 
    "workout-gym", 
    "burgundy"
  ]
};

export const attributes: Attribute[] = [
  {
    id: "sleeveless-tank",
    name: "Sleeveless tank",
    icon: "👚"
  },
  {
    id: "white-summer",
    name: "White Summer",
    icon: "👕"
  },
  {
    id: "red-tunic",
    name: "Red Tunic",
    icon: "👗"
  },
  {
    id: "summer",
    name: "Summer",
    icon: "🏝️"
  },
  {
    id: "workout-gym",
    name: "Workout/Gym",
    icon: "🏋️"
  },
  {
    id: "burgundy",
    name: "Burgundy",
    icon: "🧵"
  }
];

// Generate similar products
export const generateSimilarProducts = (
  attribute: string | null = null, 
  count: number = 10
): Product[] => {
  const products: Product[] = [];
  
  // Use different images based on attributes
  for (let i = 1; i <= count; i++) {
    const discount = Math.floor(Math.random() * 70) + 10;
    const originalPrice = Math.floor(Math.random() * 2000) + 500;
    const currentPrice = Math.floor(originalPrice * (1 - discount / 100));
    
    const productAttributes = [...mainProduct.attributes];
    
    // If an attribute is selected, make sure it's included in the similar products
    if (attribute && !productAttributes.includes(attribute)) {
      productAttributes.push(attribute);
    }
    
    // Select random attributes for variety
    const shuffledAttributes = [...productAttributes]
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 2);
    
    products.push({
      id: `similar-product-${i}`,
      name: `Women's Ethnic Kurta ${i}`,
      category: "Women's Clothing",
      originalPrice,
      currentPrice,
      discount,
      // Use main product image with different scale to simulate similar products
      imageSrc: mainProduct.imageSrc,
      attributes: shuffledAttributes
    });
  }
  
  return products;
};

// Initial set of similar products
export const similarProducts = generateSimilarProducts();
